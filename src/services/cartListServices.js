import mongoose from "mongoose";
const ObjectID=mongoose.Types.ObjectId

import CartListModel from "../models/CartModel.js";




const SaveCartListService=async (req)=>{
    try {
        let user_id=req.headers.user_id
        let reqBody=req.body
        reqBody.userID=user_id

        console.log(user_id)



        await CartListModel.findOneAndUpdate(
            {userID:user_id,productID:reqBody.productID},
            {$set:reqBody},
            {upsert:true}
        )
        return {
            status: 'success',
            message: 'CartList Added',
        }
    } catch (err) {
        return {
            status: 'failed',
            message: ' Something went wrong',
        }
    }
}
const ReadCartListService = async (req) => {
    try {
        let user_id=new ObjectID(req.headers.user_id._id);



        let matchStage = { $match: { userID:user_id } };

        let joinWithProductStage = {
            $lookup: {
                from: 'products',
                localField: 'productID',
                foreignField: '_id',
                as: 'product'
            }
        };
        let unwindProductStage={$unwind:"$product"};

        let result=await CartListModel.aggregate([
            matchStage,joinWithProductStage,unwindProductStage
        ])



        return {
            status: 'success',
            data: result
        };
    } catch (err) {
        return {
            status: 'failed',
            message: 'Something went wrong'
        };
    }
};


const RemoveCartListService=async (req)=>{
    try {
        let user_id=req.headers.user_id
        let reqBody=req.body
        reqBody.userID=user_id

        await CartListModel.deleteOne(
            reqBody,

        )
        return {
            status: 'success',
            message: 'Successfully Removed',
        }
    }catch (err) {
        return {
            status: 'failed',
            message: 'Something went wrong',
        }
    }
}


export {SaveCartListService,ReadCartListService,RemoveCartListService}