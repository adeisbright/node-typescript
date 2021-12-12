import { Item , BaseItem } from "./item.interface";
import { Items } from "./items.interface";

//Create the In-memory storage 
const items : Items = {
    1 : {
        name : "Afang" , 
        description : "Native and Awesome soup" , 
        price : 500 , 
        image : "https://localhost:7000/afang.jpg" , 
        id : 1
    } , 
    2 : {
        name : "Rice" , 
        description : "Freshly Prepared Rice" , 
        price : 400 , 
        image : "https://localhost:7000/rice.jpg" , 
        id : 2
    } , 
    3 : {
        name : "Beans" , 
        description : "Easy and cheap to make" , 
        price : 100 , 
        image : "https://localhost:7000/beans.jpg" , 
        id : 3
    }
}

//The service metod to operate on our database 

export const findAll = async () : Promise<Item[]> => Object.values(items)

export const find = async (id : number) :Promise<Item> => items[id] 

export const create = async (newItem : BaseItem) : Promise<Item> => {
    let id = new Date().valueOf() 

    items[id] = {
        id , 
        ...newItem
    }
    
    return items[id]
}

export const update = async (id : number , updateItem : BaseItem) : Promise<Item | null> => {

    let item = await find(id) 
    if (!item){
        return null
    }
    items[id] = {
        id , 
        ... updateItem
    }

    return items[id]

}

export const remove = async (id : number) : Promise<null | void> => {
    let item = await find(id) 
    if (!item){
        return null 
    }
    delete items[id]
}