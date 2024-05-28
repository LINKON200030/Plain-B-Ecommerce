import mongoose from 'mongoose'
const ProductDetailsSchema=new mongoose.Schema({
    img1:{
        type:String,
        unique:true
    },
    img2:{
        type:String,
        unique:true
    },
    img3:{
        type:String,
        unique:true
    },
    img4:{
        type:String,
        unique:true
    },
    img5:{
        type:String,
        unique:true
    },
    img6:{
        type:String,
        unique:true
    },
    img7:{
        type:String,
        unique:true
    },
    img8:{
        type:String,
        unique:true
    },
    des:{
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
    },
    productID:{
        type:mongoose.Types.ObjectId,
        ref:'products',
        required:true
    }
},
{
    timestamps:true, versionKey: false
})
const ProductDetailsModel=mongoose.model('productdetails',ProductDetailsSchema)
export default ProductDetailsModel