import {
    CreateInvoiceService,
    PaymentFailedService,
    PaymentSuccessService,
    PaymentCancelService,
    PaymentIPNService,
    InvoiceListService,
    InvoiceProductListService

} from '../services/invoicesServices.js'

const CreateInvoiceController=async(req,res)=>{

    try{
        let result=await CreateInvoiceService(req)
        res.json(result)
    }
    catch(err){
        res.json(err)
    }
}
const PaymentFailedController=async(req,res)=>{

    try{
        let result=await PaymentFailedService(req)
        res.json(result)
    }
    catch(err){
        res.json(err)
    }
}
const PaymentSuccessController=async(req,res)=>{

    try{
        let result=await PaymentSuccessService(req)
        res.json(result)
    }
    catch(err){
        res.json(err)
    }
}

const PaymentCancelController=async(req,res)=>{

    try{
        let result=await PaymentCancelService(req)
        res.json(result)
    }
    catch(err){
        res.json(err)
    }
}
const PaymentIPNController=async(req,res)=>{

    try{
        let result=await PaymentIPNService(req)
        res.json(result)
    }
    catch(err){
        res.json(err)
    }
}

const InvoiceListController=async(req,res)=>{

    try{
        let result=await InvoiceListService(req)
        res.json(result)
    }
    catch(err){
        res.json(err)
    }
}

const InvoiceProductListController=async(req,res)=>{

    try{
        let result=await InvoiceProductListService(req)
        res.json(result)
    }
    catch(err){
        res.json(err)
    }
}
export {CreateInvoiceController,PaymentFailedController,PaymentSuccessController,PaymentCancelController,PaymentIPNController,InvoiceListController,InvoiceProductListController}