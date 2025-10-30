import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  contactNumber: {
    type: String,
    required: true,
    trim: true,
    match: [/^[0-9]{10}$/, "Contact number must be 10 digits"], // simple validation
  },
  role: {
    type: String,
    enum: ["intern", "admin"],
    default: "intern",
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);
export default User;
