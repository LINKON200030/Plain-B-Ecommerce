import {

    SaveWishListService,
    ReadWishListService,
    RemoveWishListService
} from '../services/wishListServices.js'


const createWishListController = async (req, res) => {
    try {
        let result = await SaveWishListService(req)

        if (result.status === 'success') {
            res.json({
                status: 'success',
                massage: 'Product Successfully Added',
            });
        } else {
            res.status(500).json(result);
        }
    } catch (err) {
        return {
            status: 'failed',
            massage: 'Product Not Added',
        }
    }
}
const updateWishListController = async (req, res) => {
    try {
        let result = await SaveWishListService(req)

        if (result.status === 'success') {
            res.json({
                status: 'success',
                massage: 'Product Successfully Updated',
            });
        } else {
            res.status(500).json(result);
        }
    } catch (err) {
        return {
            status: 'failed',
            massage: 'Product Not Added',
        }
    }
}
const readWishListController = async (req, res) => {
    try {
        let result = await ReadWishListService(req)

        if (result.status === 'success') {
            res.json({
                status: 'success',
                data: result.data,
            });
        } else {
            res.status(500).json(result);
        }
    } catch (err) {
        return {
            status: 'failed',
            massage: 'Product Not Added',
        }
    }
}
const removeWishListController = async (req, res) => {
    try {
        let result = await RemoveWishListService(req)

        if (result.status === 'success') {
            res.json({
                status: 'success',
                massage: 'Product Successfully Removed',
            });
        } else {
            res.status(500).json(result);
        }
    } catch (err) {
        return {
            status: 'failed',
            massage: 'Something went wrong',
        }
    }
}
export {
    createWishListController,
    updateWishListController,
    readWishListController,
    removeWishListController
}

