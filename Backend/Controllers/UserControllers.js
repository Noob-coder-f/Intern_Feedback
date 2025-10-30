import User from "../models/User.js"
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

export const registerUser = async (req, res) => {
  try {
    const {
      fullName,
      email,
      contactNumber,
      role,
      secretKey,
      password,
      confirmPassword,
    } = req.body;

    if (!fullName || !email || !contactNumber || !role || !password || !confirmPassword) {
      return res.status(400).json({ success: false, message: "All fields are required ❌" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ success: false, message: "Passwords do not match ❌" });
    }

    if (secretKey !== process.env.SECRET_KEY) {
      return res.status(403).json({ success: false, message: "Invalid secret key ❌" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "User already exists ❌" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      fullName,
      email,
      contactNumber,
      role,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    res.status(201).json({
      success: true,
      message: "User registered successfully ✅",
      user: {
        id: savedUser._id,
        fullName: savedUser.fullName,
        email: savedUser.email,
        contactNumber: savedUser.contactNumber,
        role: savedUser.role,
      },
    });
  } catch (error) {
    console.error("Registration Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error ❌",
      error: error.message,
    });
  }
};
