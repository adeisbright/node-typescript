import  {Request , Response , NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { Jwt } from '../common/jwt';
import userServices from '../user/services/user.services';

// @//ts-expect-error
const jwtSecret: string = "kjfkjckjfkjfkjfkjfkjfkjf"  ;  //process.env.JWT_SECRET;

class JwtMiddleware {
    checkRefershId(
        req : Request , 
        res : Response , 
        next : NextFunction
    ){
        try{
            const {refreshToken} = req.body 
            if (refreshToken){
                next()
            }else{
                res.status(400).json({
                    message : "Provide valid refresh token"
                })
            }
        }catch(error){
            res.status(500).json(error)
        }
    }
    verifyRefreshBodyField(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        if (req.body && req.body.refreshToken) {
            return next();
        } else {
            return res
                .status(400)
                .send({ errors: ['Missing required field: refreshToken'] });
        }
    }

    async validRefreshNeeded(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        const user: any = await userServices.getUserByEmailWithPassword(
            res.locals.jwt.email
        );
        const salt = crypto.createSecretKey(
            Buffer.from(res.locals.jwt.refreshKey.data)
        );
        const hash = crypto
            .createHmac('sha512', salt)
            .update(res.locals.jwt.userId + jwtSecret)
            .digest('base64');
        if (hash === req.body.refreshToken) {
            req.body = {
                userId: user._id,
                email: user.email,
                permissionFlags: user.permissionFlags,
            };
            return next();
        } else {
            return res.status(400).send({ errors: ['Invalid refresh token'] });
        }
    }
    
    async  verifyRefreshToken(
        req : Request , 
        res : Response , 
        next : NextFunction
    ){
        try {
            let user = await userServices.getUserByEmail(res.locals.jwt.email) 
            const salt = crypto.createSecretKey(
                Buffer.from(res.locals.jwt.refreshKey.data)
            )

            const hash = crypto.createHmac(
                "sha512" , salt
            ).update(res.locals.jwt.userId + jwtSecret)
            .digest("base64")
            if (hash === req.body.refreshToken) {
                req.body = {
                    userId: user._id,
                    email: user.email,
                    permissionFlags: user.permissionFlags,
                };
                return next();
            } else {
                return res.status(400).send({ errors: ['Invalid refresh token'] });
            }

        }catch(error){
            res.status(500).json(error)
        }
    }
    validJWTNeeded(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        if (req.headers['authorization']) {
            try {
                const authorization = req.headers['authorization'].split(' ');
                if (authorization[0] !== 'Bearer') {
                    return res.status(401).send();
                } else {
                    res.locals.jwt = jwt.verify(
                        authorization[1],
                        jwtSecret
                    ) as Jwt;
                    next();
                }
            } catch (err) {
                return res.status(403).send();
            }
        } else {
            return res.status(401).send();
        }
    }

    async validateJWT(
        req : Request , 
        res : Response , 
        next : NextFunction
    ) {
       try{
            if (req.headers["authorization"]){
                const authorization = req.headers["authorization"].split(' ')
                const isBearerToken = authorization[0] === "Bearer" 
                if (isBearerToken){
                    const token = authorization[1] 
                    
                    // Create a local variable 
                    res.locals.jwt = jwt.verify(token , jwtSecret) as Jwt
                    next()
                }else{
                    res.status(401).json({
                        message : "Not Authorized"
                    })
                }

            }else{
                res.status(400).json({
                    message : "No Authorization code provided"
                })
            }
       }catch(error){
           res.status(500).json(error)
       }
    }
}

export default new JwtMiddleware();