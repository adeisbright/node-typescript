
interface Address {
    country : string , 
    state : string , 
    location : string
}
export interface OrdinaryUser {
    name : string , 
    age?: number , 
    gender ?: string , 
    hobbies? : string []  , 
    address : Address
}

export interface User extends OrdinaryUser {
    userId : number
}