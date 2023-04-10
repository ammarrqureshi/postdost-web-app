import { Request, Response, NextFunction } from "express";
import CustomError from "../errors/CustomError";

export default function unhandledRoutes(
  req: Request,
  res: Response,
  next: NextFunction
) {
 
  next(new CustomError(`Cannot ${req.method} ${req.url}`, 404 , 'NotFoundError'))
}
