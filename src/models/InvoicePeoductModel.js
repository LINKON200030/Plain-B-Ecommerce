import mongoose from 'mongoose';

const InvoicePeoductSchema=mongoose.Schema({
    userID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    invoiceID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Invoice',
        required:true
    },
    productID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product',
        required:true
    },
    qty:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    color:{
        type:String,
        required:true
    },
    size:{
        type:String,
        required:true
    }
},
    {
        timestamps:true,versionKey:false
    })

const InvoicePeoductModel=mongoose.model('InvoiceProduct',InvoicePeoductSchema);
export default InvoicePeoductModel