import express from 'express';
import createPostRouter from './crudPost/createPost.js';
import readPostRouter from './crudPost/readPost.js';
import updatePostRouter from './crudPost/updatePost.js';
import deletePostRouter from './crudPost/deletePost.js';
import listPostRouter from './crudPost/listPost.js';
import Post from '../schemas/Post.js';

const router = express.Router();

router.use('/list-post', listPostRouter);
router.use('/create-post', createPostRouter);
router.use('/read-post', readPostRouter);
router.use('/update-post', updatePostRouter);
router.use('/delete-post', deletePostRouter);

router.get('/', async (req, res) => {
  const popularPosts = await Post.find({}).sort('-views').limit(2);
  const recentPosts = await Post.find({}).sort('date');
  res.render('home', { popularPosts :popularPosts , recentPosts: recentPosts });
});

export default router;
