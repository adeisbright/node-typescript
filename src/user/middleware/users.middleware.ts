import express , {Response , Request , NextFunction} from "express" 
import userServices from "../services/user.services";

class Middleware {
    async validateRequiredUserBodyFields(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        const {email , password} = req.body
        if (req.body && email && password) {
            next();
        } else {
            res.status(400).send({
                error: `Missing required fields email and password`,
            });
        }
    }
    
    async validateSameEmailDoesntExist(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        const user = await userServices.getUserByEmail(req.body.email);
        if (user) {
            res.status(400).send({ error: `User email already exists` });
        } else {
            next();
        }
    }

    async validateSameEmailBelongToSameUser(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        const user = await userServices.getUserByEmail(req.body.email);
        if (user && user.id === req.params.userId) {
            next();
        } else {
            res.status(400).send({ error: `Invalid email` });
        }
    }
    
    // Here we need to use an arrow function to bind `this` correctly
    validatePatchEmail = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        if (req.body.email) {
            this.validateSameEmailBelongToSameUser(req, res, next);
        } else {
            next();
        }
    };
    
    async validateUserExists(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        const user = await userServices.readById(req.params.userId);
        if (user) {
            next();
        } else {
            res.status(404).send({
                error: `User ${req.params.userId} not found`,
            });
        }
    }

    async extractUserId(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        req.body.id = req.params.userId;
        next();
    }
    
}

export default new Middleware()