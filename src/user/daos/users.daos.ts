import { CreateUserDto } from "../dto/create.user.dto"; 
import { PatchUserDto } from "../dto/patch.user.dto"; 
import { PutUserDto } from "../dto/put.user.dto"; 
import MongooseService from "../../common/mongoose.service";


class UsersDao {
    Schema = MongooseService.getMongoose().Schema;

    userSchema = new this.Schema({
        _id: String,
        email: String,
        password: { type: String, select: false },
        firstName: String,
        lastName: String,
        permissionFlags: Number,
    }, { id: false });

    User = MongooseService.getMongoose().model('Users', this.userSchema);
    constructor(){
        console.log("A new Instance")
    }

    async addUser(userFields: CreateUserDto) {
        const userId = String(new Date().valueOf());
        const user = await  this.User.create({
            _id: userId,
           
            permissionFlags: 1,
            ...userFields
        });
       
        return userId;
    }

    async getUserByEmail(email: string) {
        return await this.User.findOne({ email: email });
    }
    
    async getUserById(userId: string) {
        return await this.User.findOne({ _id: userId });
    }
    
    async getUsers(limit = 25, page = 0) {
        return await this.User.find()
            .skip(limit * page)
            .limit(limit)
            
    }

    async removeUserById(userId: string) {
        return await this.User.deleteOne({ _id: userId });
    }

    async updateUserById(
        userId: string,
        userFields: PatchUserDto | PutUserDto
    ) {
        const existingUser = await this.User.findOneAndUpdate(
            { _id: userId },
            { $set: userFields },
            { new: true  , useFindAndModify:false}
        );
    
        return existingUser;
    }
    async getUserByEmailWithPassword(email: string) {
        return await this.User.findOne({ email: email })
            .select('_id email permissionFlags +password')
            
    }

    async getUserUsingEmail(email : string){
        const user = await this.User.findOne({email : email})
        .select('_id email permissionFlags +passowrd')

        console.log(user)
        return user
    }
}

export default new UsersDao() 
