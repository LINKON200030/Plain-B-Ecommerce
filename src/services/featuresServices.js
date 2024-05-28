import FeatureModel from "../models/FeaturesModel.js";

const featuresServices=async(req)=>{

    try{
        const data=await FeatureModel.find();
        return {
            status:'success',
            data:data
        }
    }
    catch(err){
        return {
            status:'failed',
            data:err
        }
    }
}
export default featuresServices