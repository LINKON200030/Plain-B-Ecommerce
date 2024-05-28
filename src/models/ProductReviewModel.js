import mongoose from 'mongoose'
const reviewSchema=new mongoose.Schema({
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
    desc:{
        type:String,
        required:true
    },
    rating:{
        type:String,
        required:true
    }


    },
    {
        timestamps:true, versionKey: false
    })
const ProductReviewModel=mongoose.model('reviews',reviewSchema);
export default ProductReviewModel