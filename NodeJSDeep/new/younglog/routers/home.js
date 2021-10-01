import express from 'express';
import Post from '../schemas/Post.js';

const router = express.Router();
router.get('/', async (req, res) => {
  res.render('home');
});

export default router;
