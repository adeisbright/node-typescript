export default class HttpException extends Error {
    statusCode ? : number  ; 
    status ? : number  ; 
    message : string  ;
    error : string | null  ; 

    constructor(statusCode : number , message : string  , error ?: string){
        super(message) 
        this.message = message ; 
        this.statusCode = statusCode 
        this.error = error || null 
    }
}