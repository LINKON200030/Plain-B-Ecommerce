import mongoose from 'mongoose';
const cartSchema=new mongoose.Schema({
    productID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product',
        required:true
    },
    userID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true


    },
    color:{
        type:String,
        required:true
    },
    qty:{
        type:String,
        default:1
    },
    size:{
        type:String,
        required:true
    }
},
{
    timestamps:true, versionKey: false
})
const Cart=mongoose.model('carts',cartSchema);
export default Cart