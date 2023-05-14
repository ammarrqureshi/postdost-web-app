//Global Imports
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import passport from 'passport';
import cookieSession from 'cookie-session';
// import crypto from 'crypto';
//Internals Imports
import { connectDb } from './db/index.js';
import userRouter from './routes/User.js';
import postRouter from './routes/Post.js';
import authentication from './middlewares/Authentication.js';
import unhandledRoutes from './middlewares/UnhandledRoute.js';
import ErrorHandler from './middlewares/ErrorHandler.js';
import passportSetup from './passport.js';
const app = express();

//Middlewares
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cookieSession({
    name: 'session',
    keys: 'postdost',
    maxAge: 24 * 60 * 60 * 100,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
  })
);

//Environments Variables
const port = process.env.PORT || 8000;
const MONGODB_URL = process.env.MONGODB_URL;

//fr errors
app.use(ErrorHandler());
app.use(unhandledRoutes());
//routes
app.use('/user', userRouter);
// app.use('/post', authentication, postRouter);

const start = async () => {
  try {
    await connectDb(MONGODB_URL);
    app.listen(port, () => console.log(`Server is running on ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();

//Generated the jwtsecretkey
// const secretKey = crypto.randomBytes(32).toString('base64');
// console.log('JWT secret key:', secretKey);
