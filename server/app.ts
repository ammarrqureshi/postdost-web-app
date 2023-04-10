import express from "express";
import cors from "cors";
import { join } from "path";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || "development";

app.set("port", port );
app.set("env", env );

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

if (env === "production") {
  // app.use(cors({ origin: "https://example.com" }));
} else {
  app.use(cors());
}

if (env === "development") {
  app.get("/", (req, res) => {
    res.json({ message: "Server Is Running" });
  });
}

if (env === "production") {
  app.use(express.static(join(__dirname, "..", "build")));
  app.get("*", (req, res) => {
    res.sendFile(join(__dirname, "..", "build", "index.html"));
  });
}



export default app;
