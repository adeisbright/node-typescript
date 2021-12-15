import { User } from "./user.interface"; 

export interface Users {
    [key : number] : User
}

const users : Users = {
    1 : {
        name : "Adeleke Bright" , 
        age : 27 , 
        gender : "M" , 
        address : {
            country : "Federal Republic of Niger" , 
            state : "Lagos State" , 
            location : "18 Dame Oyem Street, Ojo"
        } , 
        userId : 1
    }
}

export default users 
