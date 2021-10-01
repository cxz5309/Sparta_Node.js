import mongoose from 'mongoose';

const { Schema } = mongoose;
const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  userPwd: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  thumbnail: {
    type: String
  },
  date: {
    type: String,
    required: true
  },
  views: {
    type: Number
  }
});

export default mongoose.model('Post', postSchema);
