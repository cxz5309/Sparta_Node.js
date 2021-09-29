import express from 'express';
import createPostRouter from './createPost/createPost.js';
import readPostRouter from './readPost/readPost.js';
import updatePostRouter from './updatePost/updatePost.js';
import deletePostRouter from './deletePost/deletePost.js';
import Post from '../schemas/Post.js';

const router = express.Router();

router.use('/create_post', createPostRouter);
router.use('/read_post', readPostRouter);
router.use('/update_post', updatePostRouter);
router.use('/delete_post', deletePostRouter);

router.get('/', async (req, res) => {
  const popularPosts = await Post.find({}).sort('-date');
  const recentPosts = await Post.find({}).sort('-date');
  res.render('home', { popularPosts :popularPosts , recentPosts: recentPosts });
});

export default router;
