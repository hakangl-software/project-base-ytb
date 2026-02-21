class Response {
    constructor(){ }

    static succesResponse(data, code = 200){
        return{
            code,
            data
        }
    }
        // Static : static metodlar varsa direkt classın refesıyla ulaşabilriz. Yani Response.successResponse olarak çağırabiliriz
     static errosResponse(error){
        return{
            code,
            error:{
                message: error.message,
                description: error.description
            }
        }
    }
}



module.exports = Response;