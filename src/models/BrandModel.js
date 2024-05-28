import mongoose from 'mongoose'

const BrandSchema=new mongoose.Schema({
    brandName:{
        type:String,
        required:true,
        unique:true
    },
    brandImg:{
        type:String,
        required:true,
        unique:true
    },

},
{
    timestamps:true, versionKey: false
})
const BrandModel=mongoose.model('brands',BrandSchema)

export default BrandModel