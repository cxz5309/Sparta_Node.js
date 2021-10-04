import express from 'express';
import Post from '../schemas/Post.js';

const router = express.Router();
router.get('/', async (req, res) => {
  res.send({ test: 'home' });
});

router.get('/api', async (req, res) => {
  res.send({ test: 'hi' });
});

router.get('/create-post', async (req, res) => {
  res.send({ test: 'create-post' });
});

export default router;
