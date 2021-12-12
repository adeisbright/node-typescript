import express from "express" 
import UserController from "./user.controller"

const {
    getUsers , 
    getUser , 
    updateUser , 
    removeUser , 
    addUser
} = UserController
const userRouter = express.Router()

userRouter.route("/").get(getUsers).post(addUser)
userRouter.route("/:userId").get(getUser).put(updateUser).delete(removeUser)
export default userRouter


