import mongoose from "mongoose";

const PaymentSettingSchema=new mongoose.Schema({
    store_id:{
        type:String,
        required:true
    },
    store_pass:{
        type:String,
        required:true
    },
    currency:{
        type:String,
        required:true
    },
    success_url:{
        type:String,
        required:true
    },
    fail_url:{
        type:String,
        required:true
    },
    cancel_url:{
        type:String,
        required:true
    },
    ipn_url:{
        type:String,
        required:true
    },
    init_url:{
        type:String,
        required:true
    }
},{
    timestamps:true,
    versionKey:false
})
const PaymentSettingModel=mongoose.model('PaymentSetting',PaymentSettingSchema)
export default PaymentSettingModel