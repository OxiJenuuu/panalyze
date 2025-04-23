import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Conectat la MongoDB");
  } catch (error) {
    console.error("Eroare conexiune DB:", error.message);
    process.exit(1);
  }
};
