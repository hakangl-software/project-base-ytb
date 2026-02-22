const Enum = require("../config/Enum");
const CustomError = require("./Error");

class Response {
  constructor() {}

  static successResponse(data, code = 200) {
    return {
      code,
      data,
    };
  }
  // Static : static metodlar varsa direkt classın refesıyla ulaşabilriz. Yani Response.successResponse olarak çağırabiliriz
  static errorsResponse(error) {
    console.error(error);
    if (error instanceof CustomError) {
      return {
        code: error.code,
        error: {
          message: error.message,
          description: error.description,
        },
      };
    }
    return {
      code: Enum.HTTP_CODES.INT_SERVER_ERROR,
      error: {
        message: "Unknown Error!",
        description: error.message ,
      },
    };
  }
}
module.exports = Response;
