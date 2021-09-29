import express from 'express';
import path from 'path';
import Post from '../../schemas/Post.js';

const router = express.Router();

const getReadPost = async (req, res) => {
  const thisPost = await Post.findById(req.params.id);
  console.log(thisPost);
  await thisPost.updateOne({$inc : {'views' : 1}})
  return res.render('read-post', { content: thisPost });
};

router
  .get('/:id', getReadPost)
  .use(express.static(path.join(path.resolve(), 'public')));

export default router;
