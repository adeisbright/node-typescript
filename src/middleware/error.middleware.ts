import HttpException from "../common/http-exception" 

import {Request , Response , NextFunction} from "express" 

export const errorHandler = (
    error : HttpException , 
    req : Request , 
    res : Response , 
    next : NextFunction
) => {
    const statusCode = error.statusCode || error.status || 500
    res.status(statusCode).json(error)

}

