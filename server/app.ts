import express from "express";
import cors from "cors";
import { join } from "path";
import dotenv from "dotenv";
<<<<<<< HEAD
<<<<<<< HEAD
import session from "express-session";
import { dbConnection } from "./database";
import CustomError from "./errors/CustomError";
import globalErrors from "./middleware/globalErrors.middleware";
import unhandledRoutes from "./middleware/unhandledRoutes.middleware";
const MongoDBStore = require("connect-mongodb-session")(session);

// Load environment variables from file
dotenv.config();

// Destructure environment variables
const {
  NODE_ENV = "development",
  PORT = 3000,
  MONGODB_SESSION_URI,
  SESSION_SECRET_KEY,
} = process.env;

// Create an instance of the Express application
const app = express();

// Set the application settings
app.set("port", PORT);
app.set("env", NODE_ENV);

// Configure middleware for handling JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Establish database connection
dbConnection();


const store = new MongoDBStore({
  uri: MONGODB_SESSION_URI,
  collection: "mySessions",
});
if (!SESSION_SECRET_KEY) {
  throw new CustomError(
    "SESSION_SECRET_KEY is not defined",
    500,
    "SessionSecretKeyNotFoundError"
  );
}
app.use(
  session({
    secret: SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    store,
  })
);

if (NODE_ENV === "development") {
  app.use(cors());
  app.get("/", (req, res) => {
    res.json({ message: "Server Is Running" });
  });
} else if (NODE_ENV === "production") {
  // app.use(cors({ origin: "https://example.com" }));
  // Serve static files and fallback to index.html for production environment
=======
=======
import session from "express-session";
import { dbConnection } from "./database";
import CustomError from "./errors/CustomError";
const MongoDBStore = require("connect-mongodb-session")(session);
>>>>>>> d303f0d (connect with mongoDB)

// Load environment variables from file
dotenv.config();

// Destructure environment variables
const {
  NODE_ENV = "development",
  PORT = 3000,
  MONGODB_SESSION_URI,
  SESSION_SECRET_KEY,
} = process.env;

// Create an instance of the Express application
const app = express();

// Set the application settings
app.set("port", PORT);
app.set("env", NODE_ENV);

// Configure middleware for handling JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Establish database connection
dbConnection();


const store = new MongoDBStore({
  uri: MONGODB_SESSION_URI,
  collection: "mySessions",
});
if (!SESSION_SECRET_KEY) {
  throw new CustomError(
    "SESSION_SECRET_KEY is not defined",
    500,
    "SessionSecretKeyNotFoundError"
  );
}
app.use(
  session({
    secret: SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    store,
  })
);

if (NODE_ENV === "development") {
  app.use(cors());
  app.get("/", (req, res) => {
    res.json({ message: "Server Is Running" });
  });
<<<<<<< HEAD
}

if (env === "production") {
>>>>>>> eb64425 (setup the server)
=======
} else if (NODE_ENV === "production") {
  // app.use(cors({ origin: "https://example.com" }));
  // Serve static files and fallback to index.html for production environment
>>>>>>> d303f0d (connect with mongoDB)
  app.use(express.static(join(__dirname, "..", "build")));
  app.get("*", (req, res) => {
    res.sendFile(join(__dirname, "..", "build", "index.html"));
  });
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
app.use("*", unhandledRoutes);
app.use(globalErrors);
=======

>>>>>>> eb64425 (setup the server)

=======
>>>>>>> d303f0d (connect with mongoDB)
=======
app.use("*", unhandledRoutes);
app.use(globalErrors);

>>>>>>> a7c9aa0 (create globalErrors & unhandleRoutes  middleware)
export default app;
