import express from "express"
import {Server , createServer}  from "http"
import * as winston from "winston" 
import * as expressWinston from "express-winston"
import cors from "cors" 
import debug from "debug" 
import dotenv from "dotenv" 
import {CommonRoutesConfig} from "./common/common.routes.config"
import { UsersRoutes } from "./user/users.routes.config"

const app :express.Application = express() 
const server : Server = createServer(app) 
const PORT = 4300 
const routes: Array<CommonRoutesConfig> = [] 
const debugLog : debug.IDebugger = debug("app") 


app.use(express.json()) 
app.use(cors()) 

// here we are preparing the expressWinston logging middleware configuration,
// which will automatically log all HTTP requests handled by Express.js
const loggerOptions: expressWinston.LoggerOptions = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
        winston.format.json(),
        winston.format.prettyPrint(),
        winston.format.colorize({ all: true })
    ),
};

if (!process.env.DEBUG) {
    loggerOptions.meta = false; // when not debugging, log requests as one-liners
}

// initialize the logger with the above configuration
app.use(expressWinston.logger(loggerOptions));

// here we are adding the UserRoutes to our array,
// after sending the Express.js application object to have the routes added to our app!
routes.push(new UsersRoutes(app));

app.get( "/" , (req : express.Request , res : express.Response) => {
    res.status(200).json({message : "Good one"})
})

server.listen(PORT , () => {
    routes.forEach((route : CommonRoutesConfig) => {
        debugLog(`Routes configured for ${route.getName()}`)
    })

    console.log(`The app is running on http://localhost:${PORT}`)
})