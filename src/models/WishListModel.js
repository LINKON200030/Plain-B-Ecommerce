import mongoose from 'mongoose'

const wishListSchema=new mongoose.Schema({
    productID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product',
        required:true
    },
    userID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
},
    {
        timestamps:true
        , versionKey: false
    })
const WishList=mongoose.model('WishList',wishListSchema)
export default WishList