export interface BaseItem {
    description : string , 
    name : string , 
    price : number , 
    image : string
}

export interface Item extends BaseItem {
    id : number
}