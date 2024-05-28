import {
    UserLoginService,
    UserVerifyService,
    SaveProfileService,
    ReadProfileService
} from '../services/userServices.js'



const UserLoginController = async (req, res) => {
    try{
        let result= await UserLoginService(req)

        if (result.status === 'success') {
            res.json({
                status: 'success',
                massage:'A 6 digit verification code has been sent to your email address.',
            });
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
const VerifyUserController = async (req, res) => {
    try{
        let result= await UserVerifyService(req)

        if (result.status === 'success') {

            // cookie set
            let cookiesOptions = {
                expires: new Date(Date.now() + 24 * 60 * 60 * 1000),

            }
            res.cookie('token',result.token, cookiesOptions);
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
const UserLogoutController = async (req, res) => {
    let cookiesOptions = {
        expires: new Date(0), // Set to an arbitrary date in the past
        httpOnly: true
    };
    res.cookie('token', '', cookiesOptions);
    return {
        status: 'success',
        message: 'User Logged Out',
    };
};

const CreateProfileController = async (req, res) => {
    try{
        let result= await SaveProfileService(req)

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
const UpdateProfileController = async (req, res) => {
    try{
        let result= await SaveProfileService(req)

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
const readProfileController = async (req, res) => {
    try{
        let result= await ReadProfileService(req)

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
export {UserLoginController,VerifyUserController,UserLogoutController,CreateProfileController,UpdateProfileController,readProfileController}