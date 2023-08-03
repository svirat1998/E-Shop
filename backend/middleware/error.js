// const ErrorHandler = require("../utils/ErrorHandler");

// module.exports = (err, req, res, next) => {
//   err.statusCode = err.statusCode || 500;
//   err.message = err.message || "Internal server Error";

//   // wrong mongodb id error
//   if (err.name === "CastError") {
//     const message = `Resources not found with this id.. Invalid ${err.path}`;
//     err = new ErrorHandler(message, 400);
//   }

//   // Duplicate key error
//   if (err.code === 11000) {
//     const message = `Duplicate key ${Object.keys(err.keyValue)} Entered`;
//     err = new ErrorHandler(message, 400);
//   }

//   // wrong jwt error
//   if (err.name === "JsonWebTokenError") {
//     const message = `Your url is invalid please try again letter`;
//     err = new ErrorHandler(message, 400);
//   }

//   // jwt expired
//   if (err.name === "TokenExpiredError") {
//     const message = `Your Url is expired please try again letter!`;
//     err = new ErrorHandler(message, 400);
//   }

//   res.status(err.statusCode).json({
//     success: false,
//     message: err.message,
//   });
// };



import  ErrorHandler from "../utils/ErrorHandler.js";

export const errorMiddleware= (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  // Wrong Mongodb Id error
  if (err.name === "CastError") {
    const message = `Resource not found. Invalid: ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  // Validation Error
  if(err.name==="ValidationError"){
    const message = Object .values(err.errors).map(val=>val.message).join(",");
    err=new ErrorHandler(message,400)
  }

  // Mongoose duplicate key error
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
    err = new ErrorHandler(message, 400);
  }

  // Wrong JWT error
  if (err.name === "JsonWebTokenError") {
    const message = `Json Web Token is invalid, Try again `;
    err = new ErrorHandler(message, 400);
  }

  // JWT EXPIRE error
  if (err.name === "TokenExpiredError") {
    const message = `Json Web Token is Expired, Try again `;
    err = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};

export default errorMiddleware
