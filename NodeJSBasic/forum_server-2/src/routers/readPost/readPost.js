import express from 'express';
import Post from '../../schemas/Post.js';

const router = express.Router();

const getCreatePost = async (req, res) => {
  const thisPost = await Post.findById(req.params.id);

  return res.render('readPost', { content: thisPost });
};

router
  .get('/:id', getCreatePost);

export default router;
