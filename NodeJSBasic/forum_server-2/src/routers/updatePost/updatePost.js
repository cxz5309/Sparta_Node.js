import express from 'express';
import Post from '../../schemas/Post.js';

const router = express.Router();

const getUpdatePost = async (req, res) => {
  const thisPost = await Post.findById(req.params.id);

  return res.render('updatePost', { messages: {}, content: thisPost });
};

const postUpdatePost = async (req, res) => {
  const { id } = req.body;
  const { title } = req.body;
  const { description } = req.body;
  const { userName } = req.body;
  const { userPwd } = req.body;
  const date = Date.now();
  console.log(id);
  const thisPost = await Post.findById(id);

  if (thisPost.userPwd !== userPwd) {
    console.log(userPwd);
    console.log(thisPost);

    console.log("비밀번호가 틀렸습니다!");
    return res.status(400).render('updatePost',
      {
        messages: { error: "비밀번호가 틀렸습니다!" },
        content: thisPost,
      });
  }
  // db update
  try {
    await thisPost.updateOne({
      $set: {
        title, userName, userPwd, description, date,
      },
    });
    return res.redirect("/");
  } catch (error) {
    console.log(error);
    return res.status(error.status).render('updatePost',
      {
        messages: { error: "수정 실패!" },
        content: thisPost,
      });
  }
};

router
  .get('/:id', getUpdatePost)
  .post('/', postUpdatePost);
export default router;
