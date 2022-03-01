//Working with Mongoose and TypeScript is easy
// First create an Interface representing a document in MongoDB
// Create a Schema corresponding to the document Interface 
// Create  A Model 
// Connect to Mongodb
import {Schema , model} from "mongoose"

interface Address {
    country : string , 
    region : string , 
    street : string
}

// Create an Interface 
interface User {
    name? : string ,
    email : string , 
    password : string , 
    address? : Address
}

// Create a Schema 
const schema = new Schema<User>({
    name : String , 
    email : {type : String , required : true} , 
    password : String
})

// Create a Model 
const UserModel = model<User>("User" , schema)