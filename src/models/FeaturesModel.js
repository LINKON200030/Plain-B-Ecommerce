import mongoose from 'mongoose';
const FeaturesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    }
},
    { timestamps: true , versionKey: false })
const Features = mongoose.model('Features', FeaturesSchema)
export default Features