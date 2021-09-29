import mongoose from "mongoose";

const { Schema } = mongoose;
const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  userPwd: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  thumbnailUrl: {
    type: String,
  },
  date: {
    type: Date,
    required: true,
  },
});

export default mongoose.model("Post", postSchema);
