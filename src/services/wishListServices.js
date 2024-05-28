
import mongoose from 'mongoose'
const ObjectId=mongoose.Types.ObjectId

import WishListModel from '../models/WishListModel.js'


const SaveWishListService=async (req)=>{
      try {
          let user_id=req.headers.user_id
          let reqBody=req.body
          reqBody.userID=user_id

          await WishListModel.findOneAndUpdate(
              reqBody,
              {$set:reqBody},
              {upsert:true}
          )
          return {
              status: 'success',
              message: 'WishList Added',
          }
      }catch (err) {
          return {
              status: 'failed',
              message: 'WishList Not Added',
          }
      }
}

const ReadWishListService=async (req)=>{
    try {
        let user_id=req.headers.user_id
        let result = await WishListModel.find({
            userID:user_id
        })
        return {
            status: 'success',
            data: result
        }
    }catch (err) {
        return {
            status: 'failed',
            message: 'Something went wrong',
        }
    }
}
const RemoveWishListService=async (req)=>{
    try {
        let user_id=req.headers.user_id
        let reqBody=req.body
        reqBody.userID=user_id

        await WishListModel.deleteOne(
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


export {


    SaveWishListService,
    ReadWishListService,
    RemoveWishListService
}