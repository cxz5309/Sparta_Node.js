import express from 'express';
import Post from '../schemas/Post.js';

const router = express.Router();
router.get('/api', async (req, res) => {
  const popularPosts = await Post.find({}).sort('-views').limit(2);
  const recentPosts = await Post.find({}).sort('date');

  res.send('hi');
});

router.get('/create-post', async (req, res) => {
  res.send({ test: 'create-post' });
});

export default router;
