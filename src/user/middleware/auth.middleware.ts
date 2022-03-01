import {Request , Response , NextFunction} from "express"
import userServices from "../services/user.services" 

 class AuthMiddleware {
    async verifyUserPassword(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        const user: any = await userServices.getUserByEmailWithPassword(
            req.body.email
        );
        if (user) {
            if (user.password === req.body.password){
                req.body = {
                    userId: user._id,
                    email: user.email,
                    permissionFlags: user.permissionFlags,
                };
                return next();
            }
        }
        // Giving the same message in both cases
        // helps protect against cracking attempts:
        res.status(400).send({ errors: ['Invalid email and/or password'] });
    } 

    async verifyPassword(
        req : Request , 
        res : Response , 
        next : NextFunction
    ){ 
        const {email , password} = req.body 
        if (!email){
            res.status(400).json({
                message : "Bad Request"
            })
        }
        const user = await userServices.getUserByEmail(email)
        if (user && user.password === password){
            req.body = {
                userId : user._id , 
                email : email, 
                permissionFlags : user.permissionFlags
            }
            next()
        }
        res.status(400).json({
            message : "The email is not valid or the password is not correct"
        })
    }
}

export default new AuthMiddleware()