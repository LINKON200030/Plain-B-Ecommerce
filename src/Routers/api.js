import express from 'express'
const router=express.Router()


//ProductRelatedRouting
import {
    productBandList,
    productCategoryList,
    productCreateReview,
    productDetail,
    productListByBrand,
    productListByCategory,
    productListByKeyword,
    productListByRemark,
    productListBySimilar,

    productSliderList,
    ProductListByFilterController
} from '../controllers/productController.js'

router.get('/productBandList',productBandList)
router.get('/productCategoryList',productCategoryList)
router.get('/productCreateReview',productCreateReview)
router.get('/productDetail/:ProductId',productDetail)
router.get('/productListByBrand/:BrandID',productListByBrand)
router.get('/productListByCategory/:CategoryId',productListByCategory)
router.get('/productListByKeyword/:Keyword',productListByKeyword)
router.get('/productListByRemark/:Remark',productListByRemark)
router.get('/productListBySimilar/:CategoryId',productListBySimilar)
router.post('/createReview',productCreateReview)
router.get('/productSliderList/:ProductID',productSliderList)


router.post('/productListByFilter',ProductListByFilterController)

// UserRelatedRouting
import {
    UserLoginController,
    VerifyUserController,
    UserLogoutController,
    CreateProfileController,
    UpdateProfileController,
    readProfileController
} from '../controllers/userController.js'
import AuthverificationMiddleware from '../middlewares/AuthverificationMiddleware.js'

router.get('/userLogin/:email',UserLoginController)
router.get('/verifyUser/:email/:otp',VerifyUserController)
router.get('/userLogout',AuthverificationMiddleware,UserLogoutController)
router.post('/createProfile',AuthverificationMiddleware,CreateProfileController)
router.post('/updateProfile',AuthverificationMiddleware,UpdateProfileController)
router.get('/readProfile',AuthverificationMiddleware,readProfileController)

//WishListRelatedRouting

import {
    createWishListController,
    updateWishListController,
    readWishListController,
    removeWishListController
} from '../controllers/wishListController.js'

router.post('/createWishList',AuthverificationMiddleware,createWishListController)
router.post('/updateWishList',AuthverificationMiddleware,updateWishListController)
router.get('/readWishList',AuthverificationMiddleware,readWishListController)
router.get('/removeWishList',AuthverificationMiddleware,removeWishListController)


// CartRelatedRouting

import {
    CreateCartListController,
    UpdateCartListController,
    RemoveCartListController,
    ReadCartListAllController
} from '../controllers/cartListController.js'

router.post('/createCartList',AuthverificationMiddleware,CreateCartListController)
router.post('/updateCartList',AuthverificationMiddleware,UpdateCartListController)
router.get('/removeCartList',AuthverificationMiddleware,RemoveCartListController)
router.get('/readCartListAll',AuthverificationMiddleware,ReadCartListAllController)


// InvoiceRelatedRouting

import {
    CreateInvoiceController,
    PaymentFailedController,
    PaymentSuccessController,
    PaymentCancelController,
    PaymentIPNController,
    InvoiceListController,
    InvoiceProductListController

} from '../controllers/invoiceController.js'

router.get('/createInvoice',AuthverificationMiddleware,CreateInvoiceController)
router.get('/paymentFailed',AuthverificationMiddleware,PaymentFailedController)
router.get('/paymentSuccess',AuthverificationMiddleware,PaymentSuccessController)
router.get('/paymentCancel',AuthverificationMiddleware,PaymentCancelController)
router.get('/paymentIPN',AuthverificationMiddleware,PaymentIPNController)
router.get('/invoiceList',AuthverificationMiddleware,InvoiceListController)
router.get('/invoiceProductList/:invoice_id',AuthverificationMiddleware,InvoiceProductListController)


// FeaturesRelatedRouting
import {
    featuresController
} from '../controllers/featuresController.js'

 router.get('/features' , featuresController)






export default router