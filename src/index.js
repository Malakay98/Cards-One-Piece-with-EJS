import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import Routes from "./routes/index.js";


const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

// Settings
app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(Routes);
app.use(express.static(join(__dirname, "public")))

// Server
app.listen(3000);
console.log("Server on port: https://localhost:3000 ");
