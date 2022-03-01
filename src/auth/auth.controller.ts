import express, {Request , Response,  NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';

/**
* This value is automatically populated from .env, a file which you will have
* to create for yourself at the root of the project.
*
* See .env.example in the repo for the required format.
*/

const jwtSecret: string = "kjfkjckjfkjfkjfkjfkjfkjf"  ; //process.env.JWT_SECRET;
console.log(process.env.JWT_SECRET)
const tokenExpirationInSeconds = 36000;

class AuthController {
    async createJWT(req: express.Request, res: express.Response) {
        try {
            const refreshId = req.body.userId + jwtSecret;
            const salt = crypto.createSecretKey(crypto.randomBytes(16));
            const hash = crypto
                .createHmac('sha512', salt)
                .update(refreshId)
                .digest('base64');
            req.body.refreshKey = salt.export();
            const token = jwt.sign(req.body, jwtSecret, {
                expiresIn: tokenExpirationInSeconds,
            });
            return res
                .status(201)
                .send({ accessToken: token, refreshToken: hash });
        } catch (err) {
            console.log('createJWT error: %O', err);
            return res.status(500).send();
        }
    }

    async generateJWT(
        req : Request , 
        res : Response 
    ) {
        try {
            const refreshId = req.body.userId + jwtSecret
            
            const salt = crypto.createSecretKey(crypto.randomBytes(16))
            req.body.refreshKey = salt.export();
            const hash = crypto.createHmac("sha512" , salt)
                .update(refreshId)
                .digest("base64")

            // Generate a token to be used for access 
            const token = await jwt.sign(
                req.body , jwtSecret , {
                    expiresIn : tokenExpirationInSeconds , 
                    issuer : "Bigjara" , 
                    algorithm : "HS256" , 
                    subject : "Authentication"
                }
            ) 

            res.status(200).json({
                accessToken : token , 
                refreshToken : hash
            })
        }catch(error){
            res.status(500).json(error)
        }
    }
}

export default new AuthController();