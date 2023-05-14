import CustomError from "../errors/CustomError.js"
// const errorHandlerMiddlerware = (err, req, res, next) => {
//   let customError = {
//     //set default
//     statuscode: err.statuscode || 500,
//     msg: err.message || 'Something went wrong try again later!',
//   };
//   if (err.name === 'ValidationError') {
//     customError.msg = Object.values(err.errors)
//       .map((item) => item.message)
//       .join(',');
//     customError.statuscode = 400;
//   }
//   if (err.code && err.code === 11000) {
//     customError.msg = `Duplicate values entered for ${object.keys(
//       err.keyValue
//     )} field,please choose another value`;
//     customError.statuscode = 409;
//   }
//   if (err.name === 'CastError') {
//     customError.msg = `No item found with id ${err.values}`;
//     customError.statuscode = 404;
//   }
//   return res.status(customError.statuscode).json({ msg: customError.msg });
// };
// export default errorHandlerMiddlerware;

const ErrorHandler = (err,req,res,next)=>{
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json(err.toJSON());
  }
  return res
    .status(500)
    .json(new CustomError(err.message, 500, err.name).toJSON());
}

export default ErrorHandler;