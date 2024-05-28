import mongoose from 'mongoose'
const ObjectId=mongoose.Types.ObjectId
import BrandModel from '../models/BrandModel.js'
import CategoryModel from '../models/CategoryModel.js'

import ReviewModel from "../models/ProductReviewModel.js";
import SliderModel from '../models/ProductSliderModel.js'

import productModel from '../models/ProductsModel.js'




const BrandListService = async () => {
    try{
        const data=await BrandModel.find();
        return {
            status: 'success',
            data: data
        }
    }
    catch (err) {
        return {
            status: 'failed',
            data: err
        }
    }
  
}
const CategoryListService = async () => {
    try{
        const data=await CategoryModel.find();

        return {
            status: 'success',
            data: data
        }
    }
    catch (err) {
        return {
            status: 'failed',
            data: err
        }
    }
}
const SliderListService = async (req) => {
    try{
        let productID=req.params.ProductID
        let data=await SliderModel.find({productID:productID});

        return {
            status: 'success',
            data: data
        }
    }
    catch (err) {
        return {
            status: 'failed',
            data: err
        }
    }
}





const ListByBrandService = async (req) => {
    try {
        let brandID=new ObjectId(req.params.BrandID)

        let matchstage={$match:{brandID:brandID}}
        let joinWithBrandStage={$lookup:{
            from:'brands',localField:'brandID',foreignField:'_id',as:'brand'
            }}
        let joinWithCategoryStage={$lookup:{
            from:'categories',localField:'categoryID',foreignField:'_id',as:'category'
        }}
        let unwindBrand={$unwind:'$brand'}
        let unwindCategory={$unwind:'$category'}
        let projection={$project:{'categoryID':0,'brandID':0,'brand._id':0,'category._id':0}}

        let data = await productModel.aggregate([
            matchstage,joinWithBrandStage,joinWithCategoryStage,unwindBrand,unwindCategory,projection
        ])
        return {
            status: 'success',
            data: data
        };
    } catch (err) {
        return {
            status: 'failed',
            data: err
        };
    }
};
const ListByCategoryService = async (req) => {

        try {
            let categoryID=new ObjectId(req.params.CategoryId)

            let matchstage={$match:{categoryID:categoryID}}
            let joinWithBrandStage={$lookup:{
                from:'brands',localField:'brandID',foreignField:'_id',as:'brand'
            }}

            let joinWithCategoryStage={$lookup:{
                    from:'categories',localField:'categoryID',foreignField:'_id',as:'category'
                }}
            let unwindBrand={$unwind:'$brand'}
            let unwindCategory={$unwind:'$category'}
            let projection={$project:{'categoryID':0,'brandID':0,'brand._id':0,'category._id':0}}

            let data = await productModel.aggregate([
                matchstage,joinWithBrandStage,joinWithCategoryStage,unwindBrand,unwindCategory,projection
            ])
            return {
                status: 'success',
                data: data
            }
        } catch (err) {
            return {
                status: 'failed',
                data: err
            };
        }
}
const ListByRemarkService = async(req) => {
    try {
        let Remark=req.params.Remark
        let matchStage={
            $match:{
                remark:Remark
            }
        }


        let joinWithBrandStage = { $lookup:{from: 'brands', localField: 'brandID', foreignField: '_id', as: 'brand'} };
        let joinWithCategoryStage = { $lookup: { from: 'categories', localField: 'categoryID', foreignField: '_id', as: 'category' } };

        let unwindBrand = { $unwind: '$brand' };
        let unwindCategory = { $unwind: '$category' };
        let projection={$project:{'categoryID':0,'brandID':0,'brand._id':0,'category._id':0}}

        let data = await productModel.aggregate([
            matchStage, joinWithBrandStage, joinWithCategoryStage, unwindBrand, unwindCategory, projection
        ]);

        return {
            status: 'success',
            data: data
        };
    } catch (err) {
        return {
            status: 'failed',
            data: err
        };
    }
}











const ListBySimilarService = async (req) => {
    try {
        let categoryID=new ObjectId(req.params.CategoryId)

        let matchstage={$match:{categoryID:categoryID}}
        let joinWithBrandStage={$lookup:{
                from:'brands',localField:'brandID',foreignField:'_id',as:'brand'
            }}

        let joinWithCategoryStage={$lookup:{
                from:'categories',localField:'categoryID',foreignField:'_id',as:'category'
            }}
        let unwindBrand={$unwind:'$brand'}
        let unwindCategory={$unwind:'$category'}
        let projection={$project:{'categoryID':0,'brandID':0,'brand._id':0,'category._id':0}}
        let limitstage={$limit:12}
        let data = await productModel.aggregate([
            matchstage,joinWithBrandStage,joinWithCategoryStage,unwindBrand,unwindCategory,projection,limitstage
        ])
        return {
            status: 'success',
            data: data
        }
    } catch (err) {
        return {
            status: 'failed',
            data: err
        };
    }
}
const DetailsService = async (req) => {
    try {
        let ProductId=new ObjectId(req.params.ProductId)

        let matchstage={$match:{_id:ProductId}}
        let joinWithBrandStage={$lookup:{
                from:'brands',localField:'brandID',foreignField:'_id',as:'brand'
            }}

        let joinWithCategoryStage={$lookup:{
                from:'categories',localField:'categoryID',foreignField:'_id',as:'category'
            }}
        let joinwithDetailsStage={$lookup:{
            from:'productdetails',localField:'_id',foreignField:'productID',as:'details'}
        }
        let unwindBrand={$unwind:'$brand'}
        let unwindCategory={$unwind:'$category'}
        let unwindDetails={$unwind:'$details'}
        let projection={$project:{'categoryID':0,'brandID':0,'brand._id':0,'category._id':0}}

        let data = await productModel.aggregate([
            matchstage,joinWithBrandStage,joinWithCategoryStage,unwindBrand,unwindCategory,projection,joinwithDetailsStage,unwindDetails
        ])
        return {
            status: 'success',
            data: data
        }
    } catch (err) {
        return {
            status: 'failed',
            data: err
        };
    }
}








const ListByKeywordService = async (req) => {
    try {
        let SearchRegex={$regex: req.params.Keyword, $options: 'i'}
        let SearchParams=[{title:SearchRegex},{shortDes:SearchRegex}]
        let SearchQuerey={$or:SearchParams}

        let matchStage={$match:SearchQuerey}
        let joinWithBrandStage={$lookup:{
                from:'brands',localField:'brandID',foreignField:'_id',as:'brand'
            }}

        let joinWithCategoryStage={$lookup:{
                from:'categories',localField:'categoryID',foreignField:'_id',as:'category'
            }}
        let joinwithDetailsStage={$lookup:{
                from:'productdetails',localField:'_id',foreignField:'productID',as:'details'}
        }
        let unwindBrand={$unwind:'$brand'}
        let unwindCategory={$unwind:'$category'}
        let unwindDetails={$unwind:'$details'}
        let projection={$project:{'categoryID':0,'brandID':0,'brand._id':0,'category._id':0}}

        let data = await productModel.aggregate([
            matchStage,joinWithBrandStage,joinWithCategoryStage,unwindBrand,unwindCategory,projection,joinwithDetailsStage,unwindDetails
        ])
        return {
            status: 'success',
            data: data
        }



    }
    catch (err) {
        return {
            status: 'failed',
            data: err
        };
    }

}





const CreateReviewService = async (req) => {
    try {
        let user_id=req.headers.user_id
        let reqBody=req.body
        reqBody.userID=user_id

        let result=await ReviewModel.create(
            reqBody,
            {$set:reqBody},
            {upsert:true}

        )
        return {
            status: 'success',
            data: result
        }


    } catch (err) {
        return {
            status: 'failed',
            data: err
        };
    }
}

const ListByFilterService = async (req) => {
    try {
       let matchCondition={};
       if (req.body['brandID']){
           matchCondition.brandID= new ObjectId(req.body['brandID'])
       }
       if (req.body['categoryID']){
           matchCondition.categoryID= new ObjectId(req.body['categoryID'])
       }

       const MatchStage={$match:matchCondition}



       let AddFieldsStage={$addFields:{
               numericPrice:{$toInt:'$price'},
       }}

       let priceMin=parseInt(req.body['priceMin'])
        let priceMax=parseInt(req.body['priceMax'])

        let PriceMatchCondition={}

       if (!isNaN(priceMin)){
           PriceMatchCondition['numericPrice']={$gte:priceMin}
       }
       if (!isNaN(priceMax)){
           PriceMatchCondition['numericPrice']={ ...(PriceMatchCondition['numericPrice'] || {}), $lte: priceMax }
       }

       const PriceMatchStage={$match:PriceMatchCondition}





        let joinWithBrandStage={$lookup:{
                from:'brands',localField:'brandID',foreignField:'_id',as:'brand'
            }}

        let joinWithCategoryStage={$lookup:{
                from:'categories',localField:'categoryID',foreignField:'_id',as:'category'
            }}

        let unwindBrand={$unwind:'$brand'}
        let unwindCategory={$unwind:'$category'}


       let projection={$project:{'categoryID':0,'brandID':0,'brand._id':0,'category._id':0}}

       let data = await productModel.aggregate([
           MatchStage,AddFieldsStage,PriceMatchStage,joinWithBrandStage,joinWithCategoryStage,unwindBrand,unwindCategory,projection
       ])
        return {
            status: 'success',
            data: data
        }







    } catch (err) {
        return {
            status: 'failed',
            data: err
        };
    }
}



export {
    BrandListService,
    CategoryListService,
    SliderListService,
    ListByBrandService,
    ListByCategoryService,
    ListBySimilarService,
    ListByKeywordService,
    ListByRemarkService,
    DetailsService,

    CreateReviewService,
    ListByFilterService
}