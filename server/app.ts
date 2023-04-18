import express from "express";
import cors from "cors";
import { join } from "path";
import dotenv from "dotenv";
import session from "express-session";
import { dbConnection } from "./database";
import CustomError from "./errors/CustomError";
	@@ -63,13 +65,95 @@ if (NODE_ENV === "development") {
} else if (NODE_ENV === "production") {
  // app.use(cors({ origin: "https://example.com" }));
  // Serve static files and fallback to index.html for production environment
