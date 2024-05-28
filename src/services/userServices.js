


import EmailSend from "../utility/emailHelper.js"

import {EndcodeToken} from '../utility/tokenHelper.js'
import UserModel from '../Models/UserModel.js'
import ProfileModel from "../models/ProfileModel.js";

const UserLoginService = async (req) => {
    try {
        let email = req.params.email;
        console.log(email)
        let code = Math.floor(100000 + Math.random() * 900000)
        console.log(code)

        let Emailsubject = "Email Verification"
        let Emailbody = `Your verification code is ${code}`
        await EmailSend(email, Emailsubject, Emailbody)


        await UserModel.findOneAndUpdate(
            {email:email},
            {$set:{otp:code}},
            {upsert:true}
        )



        return {
            status: 'success',
            message: 'A 6 digit verification code has been sent to your email address.',
        }
    } catch (error) {
            console.log(error)
        return {

            status: 'failed',
            message: "Something went wrong",
        }
    }
}

const UserVerifyService = async (req) => {
    try {
        let email = req.params.email;
        let otp = req.params.otp;
        let total = await UserModel.find({ email: email, otp: otp }).count();

        if (total === 1) {
            let user_id = await UserModel.findOne({ email: email, otp: otp }).select('_id');

            let token = EndcodeToken(email, user_id);
           ;
            await UserModel.findOneAndUpdate(
                { email: email },
                { $set: { otp: "0" } },
            );
            return {
                status: 'success',
                message: 'User Verified',
                token: token
            };
        } else {
            return {
                status: 'failed',
                message: "Invalid OTP",
            };
        }
    } catch (error) {
        return {
            status: 'failed',
            message: "Something went wrong",
        };
    }
};



const SaveProfileService = async (req) => {
    try {
        let user_id= req.headers.user_id;
        let reqbody= req.body
        reqbody.userID=user_id

        await ProfileModel.findOneAndUpdate(
            {userID:user_id},
            {$set:reqbody},
            {upsert:true}
        )
        return {
            status: 'success',
            message: 'Profile Updated',
        }
    }catch {

        return {
            status: 'failed',
            message: "Something went wrong",
        }
    }
}

const ReadProfileService = async (req) => {
    try {
        let user_id= req.headers.user_id;

        let result = await ProfileModel.find({
            userID: user_id
        });
        return {
            status: 'success',
            data: result
        }
    }catch (err) {
        return {
            status: 'failed',
            data: err
        }
    }

}

export {

    UserLoginService,
    UserVerifyService,
    SaveProfileService,
    ReadProfileService
}


