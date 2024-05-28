import {
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
} from '../services/productServices.js'




const productBandList = async (req, res) => {
    try {
        const result = await BrandListService();

        if (result.status === 'success') {
            res.json(result);
        } else {
            res.status(500).json(result);
        }
    } catch (err) {
        console.error('Error in productBandList:', err);
        res.status(500).json({ status: 'failed', message: 'Internal Server Error' });
    }
};
const productCategoryList = async (req, res) => {
    try{
        let result= await CategoryListService()

        if (result.status === 'success') {
            res.json(result);
        } else {
            res.status(500).json(result);
        }

    }
    catch (err) {
        return {
            status: 'failed',
            data: err
        }
    }
}
const productSliderList = async (req, res) => {
    try{
        let result= await SliderListService(req)
        if (result.status === 'success') {
            res.json(result);
        } else {
            res.status(500).json(result);
        }
    }
    catch (err) {
        return {
            status: 'failed',
            data: err
        }
    }
}






const productListByBrand = async (req, res) => {
    try{
        let result= await ListByBrandService(req)

        if (result.status === 'success') {
            res.json(result);
        } else {
            res.status(500).json(result);
        }

    }
    catch (err) {
        return {
            status: 'failed',
            data: err
        }
    }

}
const productListByCategory = async (req, res) => {
    try{
        let result= await ListByCategoryService(req)

        if (result.status === 'success') {
            res.json(result);
        } else {
            res.status(500).json(result);
        }

    }
    catch (err) {
        return {
            status: 'failed',
            data: err
        }
    }
}
const productListByRemark = async (req, res) => {
    try{
        let result= await ListByRemarkService(req)

        if (result.status === 'success') {
            res.json(result);
        } else {
            res.status(500).json(result);
        }

    }
    catch (err) {
        return {
            status: 'failed',
            data: err
        }
    }
}



const productListBySimilar = async (req, res) => {
    try{
        let result= await ListBySimilarService(req)

        if (result.status === 'success') {
            res.json(result);
        } else {
            res.status(500).json(result);
        }

    }
    catch (err) {
        return {
            status: 'failed',
            data: err
        }
    }
}
const productDetail = async (req, res) => {
    try{
        let result= await DetailsService(req)

        if (result.status === 'success') {
            res.json(result);
        } else {
            res.status(500).json(result);
        }

    }
    catch (err) {
        return {
            status: 'failed',
            data: err
        }
    }
}





const productListByKeyword = async (req, res) => {
    try{
        let result= await ListByKeywordService(req)

        if (result.status === 'success') {
            res.json(result);
        } else {
            res.status(500).json(result);
        }

    }
    catch (err) {
        return {
            status: 'failed',
            data: err
        }
    }
}



const productCreateReview = async (req, res) => {
    try{
        let result= await CreateReviewService(req)

        if (result.status === 'success') {
            res.json(result);
        } else {
            res.status(500).json(result);
        }

    }
    catch (err) {
        return {
            status: 'failed',
            data: err
        }
    }
}

const ProductListByFilterController = async (req, res) => {
    try {
        let result = await ListByFilterService(req)
        if (result.status === 'success') {
            res.json(result);
        } else {
            res.status(500).json(result);
        }
    } catch (err) {
        console.error('Error in productListByFilterController:', err);
        res.status(500).json({ status: 'failed', message: 'Internal Server Error' });
    }
}

export {
    productBandList,
    productCategoryList,
    productSliderList,
    productListByBrand,
    productListByCategory,
    productListByRemark,
    productListBySimilar,
    productDetail,
    productListByKeyword,
    productCreateReview,
    ProductListByFilterController

}


