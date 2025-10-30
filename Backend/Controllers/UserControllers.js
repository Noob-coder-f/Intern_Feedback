import User from "../models/User.js"
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

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


export const loginUser = async (req, res) => {
 
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Email and password are required ❌" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: "Invalid email or password ❌" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ success: false, message: "Invalid email or password ❌" });
    }


    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || "1d" }
    );

     res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });


    res.status(200).json({
      success: true,
      message: "Login successful ✅",
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        contactNumber: user.contactNumber,
        role: user.role,
      },
    });

    
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error ❌",
      error: error.message,
    });
    
  }

}



//  Check Auth (auto-login if cookie valid)
export const checkAuth = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found." });
    res.json({ message: "User authenticated", user });
  } catch (err) {
    res.status(500).json({ message: "Error verifying user." });
  }
};

//  Logout Controller
export const logoutUser = (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out successfully." });
};
