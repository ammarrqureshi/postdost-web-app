import { Request, Response, NextFunction } from "express";
import CustomError from "../errors/CustomError";
import { IReqAuth } from "../interfaces/reqAuth.interface";

export const authenticationMiddleware = (
  req: IReqAuth | Request,
  res: Response,
  next: NextFunction
) => {
  if (!(req as IReqAuth).session || !(req as IReqAuth).session.user) {
    return res
      .status(401)
      .json(
        new CustomError(
          "You must be logged in to access this resource",
          401,
          "AuthenticationError"
        ).toJSON()
      );
  }

  next();
}
