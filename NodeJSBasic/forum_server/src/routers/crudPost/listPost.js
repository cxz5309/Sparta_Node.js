import express from 'express';
import path from 'path';
import Post from '../../schemas/Post.js';

const router = express.Router();

const getListPost = async (req, res) => {
  const contents = await Post.find({}).sort('-date');
  return res.render('list-post', { contents: contents });
};

router
  .get('/', getListPost)
  .use(express.static(path.join(path.resolve(), 'public')));

export default router;