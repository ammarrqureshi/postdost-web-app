import express from "express";
import cors from "cors";
import { join } from "path";
import dotenv from "dotenv";
import session from "express-session";
import { dbConnection } from "./database";
import CustomError from "./errors/CustomError";
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
  app.use(express.static(join(__dirname, "..", "build")));
  app.get("*", (req, res) => {
    res.sendFile(join(__dirname, "..", "build", "index.html"));
  });
}

export default app;
