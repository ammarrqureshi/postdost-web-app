import { Request, Response, NextFunction } from "express";
import CustomError from "../errors/CustomError";

export default function globalErrors(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json(err.toJSON());
  }

  return res
    .status(500)
    .json(new CustomError(err.message, 500, err.name).toJSON());
<<<<<<< HEAD
=======
  // return res.status(500).json({
  //   error: {
  //     name: "ServerError",
  //     message: `Internal server error :{}`,
  //     statusCode: 500,
  //   },
  // });
>>>>>>> a7c9aa0 (create globalErrors & unhandleRoutes  middleware)
}
