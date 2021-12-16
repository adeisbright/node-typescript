import { CommonRoutesConfig } from "../common/common.routes.config";
import express , {Request , Response , NextFunction} from "express" 
import usersController from "./controllers/users.controller";
import Middleware from "./middleware/users.middleware";

const {
    createUser , 
    listUsers , 
    getUserById , 
    removeUser , 
    updateUser , 
    partialUpdateUser
} = usersController

const {
    validateRequiredUserBodyFields , 
    validateSameEmailDoesntExist , 
    extractUserId , 
    validateUserExists , 
    validateSameEmailBelongToSameUser , 
    validatePatchEmail
} = Middleware
export class UsersRoutes extends CommonRoutesConfig {
    constructor(app : express.Application){
        super(app , "UserRoutes")
    }
    
    configureRoutes(){
        this.app.route("/users") 
        .get(listUsers)
        .post(
            validateRequiredUserBodyFields ,  
            validateSameEmailDoesntExist ,
            createUser
        )
        
        this.app.param("userId" , extractUserId)
        this.app.route("/users/:userId")
        .all(validateUserExists)
        .get(getUserById)
        .put(
            validateRequiredUserBodyFields , 
            validateSameEmailBelongToSameUser , 
            updateUser
        ).patch(
            validatePatchEmail , 
            partialUpdateUser
        )
        .delete(removeUser)

        return this.app
    }

}