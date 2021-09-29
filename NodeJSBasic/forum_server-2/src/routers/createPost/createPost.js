import express from 'express';
import User from '../../schemas/User.js';
import Post from '../../schemas/Post.js';

const router = express.Router();

const getCreatePost = (req, res) => res.render('createPost', {
  messages: {},
  postContent: {
    title: "", userName: "", userPwd: "", description: "",
  },
});

const postCreatePost = async (req, res) => {
  const { title } = req.body;
  const { description } = req.body;
  const { userName } = req.body;
  const { userPwd } = req.body;
  const date = Date.now();
  // db create
  try {
    await Post.create({
      title, description, userName, userPwd, date,
    });
    return res.redirect("/");
  } catch (error) {
    console.log(error);
    return res.status(error.status).render('createPost',
      {
        messages: { error: "생성 실패!" },
        postContent: {
          title: "", userName: "", userPwd: "", description: "",
        },
      });
  }
};

router
  .get('/', getCreatePost)
  .post('/', postCreatePost);

export default router;
