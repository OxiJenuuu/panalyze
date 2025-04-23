import express from "express";
import {
  createBox,
  getBoxById,
  updateBox,
  deleteBox
} from "../controllers/boxController.js";

const router = express.Router();

router.post("/", createBox);
router.get("/:boxId", getBoxById);
router.put("/:boxId", updateBox);
router.delete("/:boxId", deleteBox);

export default router;
