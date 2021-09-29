import express from 'express';
import Post from '../../schemas/Post.js';

const router = express.Router();

const postDeletePost = async (req, res) => {
  const { id } = req.body;
  const { userPwd } = req.body;
  // db delete

  const thisPost = await Post.findById(id);
  if (thisPost.userPwd !== userPwd) {
    console.log("비밀번호가 틀렸습니다!");
    return res.status(400).render('updatePost',
      {
        messages: { error: "비밀번호가 틀렸습니다!" },
        postContent: thisPost,
      });
  }
  try {
    await thisPost.deleteOne();
    return res.redirect("/");
  } catch (error) {
    console.log(error);
    return res.status(error.status).render('updatePost',
      {
        messages: { error: "삭제 실패!" },
        postContent: thisPost,
      });
  }
};

router
  .post('/', postDeletePost);

export default router;
