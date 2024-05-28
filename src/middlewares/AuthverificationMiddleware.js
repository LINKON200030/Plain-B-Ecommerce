import { DecodeToken } from "../utility/TokenHelper.js";

const AuthverificationMiddleware = (req, res, next) => {
    let token=req.cookies['token'];

    if (!token) {
        // Handle the case when the token is not found or undefined
        return res.status(401).json({ message: "Unauthorized" });
    }

    let decode = DecodeToken(token);

    if (decode == null) {
        return res.status(401).json({ message: "Unauthorized" });
    } else {
        let email = decode.email;
        let user_id = decode.user_id;
        req.headers.email = email;
        req.headers.user_id = user_id;
        next();
    }
};

export default AuthverificationMiddleware;
