import featuresServices from '../services/featuresServices.js'


export const featuresController=async(req,res)=>{

    try{
        let result=await featuresServices(req)
        res.json(result)
    }
    catch(err){
        res.json(err)
    }
}

