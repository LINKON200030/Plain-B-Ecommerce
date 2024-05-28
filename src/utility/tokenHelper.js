import jwt from "jsonwebtoken"

export const EndcodeToken=(email,user_id)=> {
    let KEY = "123-ABC-XYZ"
    let EXPIRE = 24 * 60 * 60 * 1000
    let PAYLOAD = {
        email: email,
        user_id: user_id
    }
    return jwt.sign(PAYLOAD, KEY, {expiresIn: EXPIRE})
}

export const DecodeToken=(token)=>{
    try {
        let KEY="123-ABC-XYZ"
        return jwt.verify(token,KEY)
    }
    catch (error) {
        return null
    }
}