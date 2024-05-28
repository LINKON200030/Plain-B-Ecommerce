import mongoose from "mongoose";

const ProductSchema=new mongoose.Schema({

    title:{
        type:String,
        required:true,
        unique:true
    },
    shortDes:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:true
    },
    discount:{
        type:Boolean,
    },
    discountedPrice:{
        type:String,
    },
    image:{
        type:String,
        required:true
    },
    star:{
        type:String,
        required:true
    },
   stock:{
       type:Boolean,
       required:true
   },
    remark:{
        type:String,
        required:true
    },
    categoryID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'categories',
        required:true
    },
    brandID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'brands',
        required:true
    }

},
{
    timestamps:true, versionKey: false
})

const ProductModel=mongoose.model('products',ProductSchema)
export default ProductModel