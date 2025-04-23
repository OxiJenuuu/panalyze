import Box from "../models/Box.js";
import { generateQR } from "../utils/qrGenerator.js";

export const createBox = async (req, res) => {
  try {
    const { boxId, location, items } = req.body;
    const box = new Box({ boxId, location, items });
    await box.save();

    const qrImage = await generateQR(boxId);
    res.status(201).json({ box, qrImage });
  } catch (err) {
    res.status(500).json({ message: "Eroare la crearea cutiei", error: err.message });
  }
};

export const getBoxById = async (req, res) => {
  try {
    const box = await Box.findOne({ boxId: req.params.boxId });
    if (!box) return res.status(404).json({ message: "Cutia nu a fost găsită" });
    res.json(box);
  } catch (err) {
    res.status(500).json({ message: "Eroare la căutarea cutiei", error: err.message });
  }
};

export const updateBox = async (req, res) => {
  try {
    const box = await Box.findOneAndUpdate({ boxId: req.params.boxId }, req.body, { new: true });
    if (!box) return res.status(404).json({ message: "Cutia nu a fost găsită" });
    res.json(box);
  } catch (err) {
    res.status(500).json({ message: "Eroare la actualizare", error: err.message });
  }
};

export const deleteBox = async (req, res) => {
  try {
    const box = await Box.findOneAndDelete({ boxId: req.params.boxId });
    if (!box) return res.status(404).json({ message: "Cutia nu a fost găsită" });
    res.json({ message: "Cutia a fost ștearsă" });
  } catch (err) {
    res.status(500).json({ message: "Eroare la ștergere", error: err.message });
  }
};
