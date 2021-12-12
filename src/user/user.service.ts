
import users , {Users} from "./item.model"; 
import { User  , OrdinaryUser} from "./user.interface";



class UserService {
    async getUsers() : Promise<User [] | unknown>{
        try {
            return  Object.values(users)
        }catch(error){
            return error 
        }
    }

    async getUser(id : number) : Promise<User | unknown |  null> {
        try {
            return users[id]
        }catch(error){
            return error 
        }
    }

    async updateUser(userId : number , userData : User) : Promise<User | unknown |  null> {
        try {
            let user = await this.getUser(userId) 
            if (!user){
                return null
            }
            users[userId] = {
                ...userData , 
                userId
            }
            return users[userId]
        }catch(error){
            return error 
        }
    }
    async removeUser(userId : number) : Promise<User | unknown |  null> {
        try {
            let user = await this.getUser(userId) 
            if (!user){
                return null
            }
            delete users[userId]
            return 
        }catch(error){
            return error 
        }
    }
    async createUser(userData : User) : Promise<User | unknown> {
        try {
            let userId : number = Date.now()
            users[userId] = {
                ...userData , 
                userId
            }

            return users[userId]
        }catch(error){
            return error 
        }
    }

}

export default UserService