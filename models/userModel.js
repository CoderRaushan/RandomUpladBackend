import mongoose from "mongoose";
const userSchema = mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    file: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
); 
const User = mongoose.model("User", userSchema);
export default User;
