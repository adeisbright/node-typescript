import { Request, Response , NextFunction } from "express";
import users , {Users} from "./users.interface"; 
import { User  , OrdinaryUser} from "./user.interface";
import UserService from "./user.service"

let userService = new UserService() 

interface IUserMethod {
    getUsers(req : Request , res : Response , next : NextFunction):string
}

class UserController {
    async getUsers(req : Request , res  : Response) {
        try {
            let users = await userService.getUsers()
            res.status(200).json(users)
        }catch(error){
            res.status(500).json(error)
        }
    }

    async getUser(req : Request , res  : Response) {
        try {
            let id : number = parseInt(req.params.userId , 10)
            let user = await userService.getUser(id)
            if (!user){
                res.status(404).json({message : "The user was not found"})
            }
            res.status(200).json(user)
        }catch(error){
            res.status(500).json(error)
        }
    }
   
    async updateUser(req : Request , res  : Response) {
        try {
            let id : number = parseInt(req.params.userId , 10)
            let userData : User = req.body
            let user = await userService.getUser(id)
            if (!user){
                res.status(404).json({message : "The user was not found"})
            }
            let updatedUser = await userService.updateUser(id , userData)
            res.status(200).json(updatedUser)
        }catch(error){
            res.status(500).json(error)
        }
    }

    async removeUser(req : Request , res  : Response) {
        try {
            let id : number = parseInt(req.params.userId , 10)
            let user = await userService.getUser(id)
            if (!user){
                res.status(404).json({message : "The user was not found"})
            }
            await userService.removeUser(id)
            res.status(200).json({message : "The user was removed"})
        }catch(error){
            res.status(500).json(error)
        }
    }

    async addUser(req : Request , res  : Response) {
        try {
           
            
            let userData : User  = req.body 
            let user = await userService.createUser(userData)
            res.status(200).json(user)
        }catch(error){
            res.status(500).json(error)
        }
    }

}

export default new UserController()