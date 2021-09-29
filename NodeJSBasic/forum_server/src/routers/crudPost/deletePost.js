import express from 'express';
import path from 'path';
import Post from '../../schemas/Post.js';

const router = express.Router();

const postDeletePost = async (req, res) => {
  const { password } = req.body;
  const {id} = req.params;
  console.log(req.params.id)
  // db delete
  const thisPost = await Post.findOne({_id: id});
  console.log(thisPost.userPwd);
  console.log(password);
  if (thisPost.userPwd !== password) {
    console.log("비밀번호가 틀렸습니다!");
    return res.status(406).send();
  }
  try {
    await thisPost.deleteOne();
    return res.send({result: "게시글 삭제 성공"})
  } catch (error) {
    console.log(error);
    return res.status(400).send();
  }
};

router
  .post('/:id', postDeletePost)
  .use(express.static(path.join(path.resolve(), 'public')));

export default router;
