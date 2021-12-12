import express , {Request , Response} from "express" 
import { BaseItem , Item } from "./item.interface"
import * as itemService from "./items.service"

export const itemRouter = express.Router() 

//The controller for our application 

itemRouter.get("/" , async (req : Request , res : Response) => {
    try {
        let items : Item[] = await itemService.findAll()
        res.status(200).json(items)
    }catch(error){
        res.status(500).json(error)
    }
})

itemRouter.get("/:id" , async (req : Request , res : Response) => {
    try{
        let id : number = parseInt(req.params.id , 10) 
        let item : Item = await itemService.find(id)
        if (!item){
            res.status(404).json({message : `No item with this id ${id} exist`}) 
        }
        res.status(200).json(item) 
    }catch(error){
        res.status(500).json(error)
    }
})

itemRouter.delete("/:id" , async (req : Request , res : Response) => {
    try {
        let id : number = parseInt(req.params.id , 10) 
        await itemService.remove(id)
        res.status(204).json({message : "The item was removed"}) 
    }catch(error){
        res.status(200).json(error)
    }
})

itemRouter.put("/:id" , async (req : Request , res : Response) => {
    try {
        let id : number = parseInt(req.params.id , 10) 
        let item : Item = req.body 
        let isItem : Item = await itemService.find(id)
        if (!isItem){
            let newItem = await itemService.create(item)
            res.status(201).json(newItem) 
        }
        let updateItem = await itemService.update(id , item)
        res.status(200).json(updateItem) 
    }catch(error){
        res.status(500).json(error)
    }
})

itemRouter.post("/" , async (req : Request , res : Response) => {
    try {
        let item : BaseItem = req.body 
        let newItem = await itemService.create(item)
        res.status(201).json(newItem) 
    }catch(error){
        res.status(500).json(error)
    }
})


