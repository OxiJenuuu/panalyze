import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import boxRoutes from "./routes/boxRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/boxes", boxRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serverul rulează pe portul ${PORT}`));
