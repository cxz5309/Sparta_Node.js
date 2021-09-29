import bcrypt from "bcrypt";
import mongoose from "mongoose";

const { Schema } = mongoose;
const userSchema = new Schema({
  userId: {
    type: Number,
    required: true,
    unique: true,
  },
  id: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
});

userSchema.pre("save", async function () {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 5);
  }
});

export default mongoose.model("User", userSchema);
