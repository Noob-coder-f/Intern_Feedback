import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  contactNumber: {
    type: String,
    required: true,
    match: [/^[0-9]{10}$/, "Contact number must be 10 digits"], // simple validation
  },
  role: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
});

const User = mongoose.model("User", userSchema,"User");
export default User;
