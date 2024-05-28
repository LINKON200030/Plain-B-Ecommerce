import mongoose from 'mongoose'
const ObjectId=mongoose.Types.ObjectId

import InvoiceModel from '../models/InvoiceModel.js'
import InvoiceProductModel from "../models/InvoicePeoductModel.js";
import CartModel from '../models/CartModel.js'
import ProfileModel from "../models/ProfileModel.js";
import PaymentSettingsModel from "../models/PaymentSettingModel.js";
import formData from 'form-data'
import axios from 'axios'

const CreateInvoiceService=async(req)=>{
    let user_id=new ObjectId(req.headers.user_id);
    let email=req.headers.email

    //Step No 01: Calculate Price, Discount ,PayblePrice, and Tax
    let matchStage= {$match:{userID:user_id}};
    let joinWithProductStage={$lookup:{
            from:'products',
            localField:'productID',
            foreignField:'_id',
            as:'product'
    }}
    let unwindStage={$unwind:'$product'}

    let CartProducts=  await CartModel.aggregate(
        [
            matchStage,
            joinWithProductStage,
            unwindStage
        ]
    )
    let totalPrice=0
    CartProducts.forEach((Element)=>{
       let price;
       if (Element['product']['discount']){
           price=parseFloat(Element['product']['discountPrice'])
       }
       else{
           price=parseFloat(Element['product']['price'])
       }

       totalPrice +=parseFloat(Element['qty'])*price;

    })

    let vat=totalPrice*0.05;
    let PayablePrice=totalPrice+vat;


// Step No 02: Prepare Customer Address and Shipping Address

    let Profile= await ProfileModel.aggregate(
         [
             matchStage
         ]
     )

    let cus_detail=`
    Name:${Profile[0]['cus_name']},
    Phone:${Profile[0]['cus_phone']},
    Address:${Profile[0]['cus_address']},
    State:${Profile[0]['cus_state']},
    Country:${Profile[0]['cus_country']},  
    `

    let ship_detail=`
    
    Name:${Profile[0]['ship_name']},
    Phone:${Profile[0]['ship_phone']},
    Address:${Profile[0]['ship_address']},
    State:${Profile[0]['ship_state']},
    Country:${Profile[0]['ship_country']},
    
    `








    // Step No 03: Transition and Other ID

    let tran_id=Math.floor(100000 + Math.random() * 900000)
    let val_id=0;
    let delivery_status='Pending'
    let payment_status='Pending'





    // Step No 04: Create Invoice
        let createInvoice=await InvoiceModel.create({
            userID:user_id,
           payable:PayablePrice,
            cus_details:cus_detail,
            ship_details:ship_detail,
            tran_id:tran_id,
            val_id:val_id,
            delivery_status:delivery_status,
            payment_status:payment_status,
            total:totalPrice,
            vat:vat
        })



    // Step No 05: Create Invoice Product

        let invoice_id=createInvoice['_id'];

        CartProducts.forEach(async (Element)=>{
           await InvoiceProductModel.create({
                 userID:user_id,
                 invoiceID:invoice_id,
                 productID:Element['productID'],
                 qty:Element['qty'],
                 price:Element['product']['discount']?Element['product']['discountPrice']:Element['product']['price'],
                 color:Element['color'],
                 size:Element['size'],
             })

        })

    // Step No 06: Remove Carts
    await CartModel.deleteMany({userID:user_id})



    // Step No 07 Prepare SSLZ Commerze Payment
    let PaymentSettings=await PaymentSettingsModel.findOne({})

    let form = new formData()
    form.append(
        'store_id',PaymentSettings[0]['store_id']
    )
    form.append(
        'store_passwd',PaymentSettings[0]['store_pass']
    )
    form.append(
        'currency',PaymentSettings[0]['currency']

    )
    form.append(
        'tran_id',tran_id.toString()
    )

    form.append(
            'success_url',`${PaymentSettings[0]['success_url']}/${tran_id}`
    )
    form.append(
        'fail_url', `${PaymentSettings[0]['fail_url']}/${tran_id}`
    )
    form.append(
        'cancel_url',`${PaymentSettings[0]['cancel_url']}/${tran_id}`
    )
    form.append(
        'ipn_url',`${PaymentSettings[0]['ipn_url']}/${tran_id}`
    )




    form.append(
        'total_amount',PayablePrice.toString()
    )









    form.append(
        'cus_name',Profile[0]['cus_name']
    )
    form.append(
        'cus_phone',Profile[0]['cus_phone']
    )
    form.append(
        'cus_add1',Profile[0]['cus_address']
    )
    form.append(
        'cus_city',Profile[0]['cus_city']
    )
    form.append(
        'cus_postcode',Profile[0]['cus_postcode']
    )
    form.append(
        'cus_country',Profile[0]['cus_country']
    )







    form.append(
        'ship_name',Profile[0]['ship_name']
    )
    form.append(
        'ship_phone',Profile[0]['ship_phone']
    )
    form.append(
        'ship_add1',Profile[0]['ship_address']
    )
    form.append(
        'ship_city',Profile[0]['ship_city']
    )
    form.append(
        'ship_postcode',Profile[0]['ship_postcode']
    )
    form.append(
        'ship_country',Profile[0]['ship_country']
    )
    form.append(
        'shipping_method','Yes'
    )







    form.append(
        'product_name','Mern Products'
    )
    form.append(
        'product_category','Mern Products Category'
    )
    form.append(
        'product_profile','general'
    )
    form.append(
        'product_amount','According to quantity'

    )

    let SSLRes= await axios.post(
        PaymentSettings[0]['init_url'], form
    )




    //Return

    return({
        status:'success',
        message:'Invoice Created Successfully',
        tran_id:tran_id,
        userID:user_id

    })





}

const PaymentFailedService=async(req)=>{
    try{
        let tran_id=req.params.tran_id;


        await InvoiceModel.findOneAndUpdate(
            {tran_id:tran_id},
            {$set:{payment_status:'Failed'}},
            {upsert:true}
        )
        return {
            status: 'Payment Failed',
            message: 'Payment Failed',
        }



    }catch(err){
        return {
            status: 'failed',
            message: "Something Went Wrong",
        };
    }
}

const PaymentSuccessService=async(req)=>{
    try{
        let tran_id=req.params.tran_id;


        await InvoiceModel.findOneAndUpdate(
            {tran_id:tran_id},
            {$set:{payment_status:'Success'}},
            {upsert:true}
        )
        return {
            status: 'Payment Success',
            message: 'Payment Sucessfully Done',
        }



    }catch(err){
        return {
            status: 'failed',
            message: "Something Went Wrong",
        };
    }
}

const PaymentCancelService=async(req)=>{
    try{
        let tran_id=req.params.tran_id;


        await InvoiceModel.findOneAndUpdate(
            {tran_id:tran_id},
            {$set:{payment_status:'Canceled'}},
            {upsert:true}
        )
        return {
            status: 'Payment Canceled',
            message: 'Payment Canceled',
        }



    }catch(err){
        return {
            status: 'failed',
            message: "Something Went Wrong",
        };
    }
}
const PaymentIPNService=async(req)=>{
    try{
        let tran_id=req.params.tran_id;
        let status=req.params.status


        await InvoiceModel.findOneAndUpdate(
            {tran_id:tran_id},
            {$set:{payment_status:status}},
            {upsert:true}
        )
        return {
            status:status,

        }



    }catch(err){
        return {
            status: 'failed',
            message: "Something Went Wrong",
        };
    }
}
const InvoiceListService=async(req)=>{
    try{
        let user_id=req.headers.user_id
        let result=await InvoiceModel.find({userID:user_id})
        return {
            status:'success',
            data:result
        }
    }catch(err){
        return {
            status: 'failed',
            message: "Something Went Wrong",
        };
    }
}

const InvoiceProductListService=async(req)=>{
    try{
       let user_id=new ObjectId(req.headers.user_id)
        let invoice_id=new ObjectId(req.params.invoice_id)
        let matchStage= {$match:{userID:user_id,invoiceID:invoice_id}};
        let joinWithProductStage={$lookup:{
                from:'products',
                localField:'productID',
                foreignField:'_id',
                as:'product'
            }}
        let unwindStage={$unwind:'$product'}
    let productList=await InvoiceProductModel.aggregate([matchStage,joinWithProductStage,unwindStage])



        return {
            status:'success',
            data:productList
        }
    }catch(err){
        return {
            status: 'failed',
            message: "Something Went Wrong",
        };
    }
}


export{
    CreateInvoiceService,
    PaymentFailedService,
    PaymentSuccessService,
    PaymentCancelService,
    PaymentIPNService,
    InvoiceListService,
    InvoiceProductListService
}