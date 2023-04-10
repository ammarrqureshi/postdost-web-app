import { IUser } from "./user.interface";

interface IReqAuth extends Request {
  session: {
    user: IUser;
  };
}

export { IReqAuth };
