import express from "express";
import fetch from "node-fetch";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/user", authMiddleware, async (req, res) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const userData = await response.json();
    res.json(userData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
