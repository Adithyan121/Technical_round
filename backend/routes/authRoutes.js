import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
  
    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }
  
    const hashedPassword = await bcrypt.hash(password, 10);
  
    try {
      const user = await User.create({ name, email, password: hashedPassword });
      res.json({ message: "User registered successfully" });
    } catch (err) {
      console.error("Error creating user: ", err); 
      res.status(400).json({ error: err.message });
    }
  });
  

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
});

export default router;
