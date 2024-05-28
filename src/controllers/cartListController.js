import {
    SaveCartListService,
    ReadCartListService,
    RemoveCartListService
} from '../services/cartListServices.js'


 const CreateCartListController = async (req, res) => {
    try {
        let result = await SaveCartListService(req)

        if (result.status === 'success') {
            res.json({
                status: 'success',
                massage: 'Product Successfully Added in Cart List',
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
const UpdateCartListController = async (req, res) => {
    try {
        let result = await SaveCartListService(req)

        if (result.status === 'success') {
            res.json({
                status: 'success',
                massage: 'Product Successfully Updated in Cart List',
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
const RemoveCartListController = async (req, res) => {
    try {
        let result = await RemoveCartListService(req)

        if (result.status === 'success') {
            res.json({
                status: 'success',
                massage: 'Product Successfully Removed from Cart List',
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

const ReadCartListAllController = async (req, res) => {
    try {
        let result = await ReadCartListService(req)
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
            massage: 'Something went wrong',
        }
    }
}

export {
    CreateCartListController,
    UpdateCartListController,
    RemoveCartListController,
    ReadCartListAllController
}