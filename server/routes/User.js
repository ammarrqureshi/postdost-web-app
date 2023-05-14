import express from 'express';
import { signUp, logIn } from '../controllers/User.js';
const userRouter = express.Router();
userRouter.post('/signup', signUp);
userRouter.post('/login', logIn);

export default userRouter;
