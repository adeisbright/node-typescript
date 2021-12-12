import dotenv from "dotenv" 
import express from "express" 
import cors from "cors" 
import helmet from "helmet" 
import {itemRouter} from "./items/item.router"
import {errorHandler} from "./middleware/error.middleware" 
import {notFoundHandler} from "./middleware/notfound.middleware"

dotenv.config() 

if (!process.env.PORT){
    process.exit(1)
}
const PORT : number = parseInt(<string>process.env.PORT  , 10)
const app = express() 

app.use(helmet())
app.use(cors())
app.use(express.json()) 
app.use("/api/menu/items" , itemRouter)
app.use(errorHandler)
app.use(notFoundHandler)

app.listen(PORT , () => console.log(`App is running on http://localhost:${PORT}`))