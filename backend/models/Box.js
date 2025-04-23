import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  name: String,
  quantity: Number
});

const boxSchema = new mongoose.Schema({
  boxId: { type: String, required: true, unique: true },
  location: {
    row: String,
    level: Number
  },
  items: [itemSchema]
}, { timestamps: true });

export default mongoose.model("Box", boxSchema);
