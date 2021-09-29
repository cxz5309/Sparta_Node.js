import express from 'express';
import path from 'path';
import User from '../../schemas/User.js';
import Post from '../../schemas/Post.js';
import {upload, uploadWithOriginalFilename} from '../../middlewares.js'
import {nowDateToString} from '../../utils.js'

const router = express.Router();

const getCreatePost = (req, res) => 
  res.render('create-post', {
    messages: {},
    content: {
      title: "", userName: "", userPwd: "", description: "",
    },
  });

const postCreatePost = async (req, res, next) => {

  const { title, description, userName, userPwd, thumbnail } = req.body;

  const thumbnailUrl = req.file ? 'image/' + req.file.filename : 'image/zero-w-logo_mini.png';
  const date = nowDateToString();
  const views = 0;

  // db create
  try {
    await Post.create({
      title, description, userName, userPwd, date, thumbnail: thumbnailUrl, views
    });
    return res.redirect("/");
  } catch (error) {
    console.log(error);
    return res.status(error.status).render('create-post',
      {
        messages: { error: "생성 실패!" },
        postContent: {
          title: "", userName: "", userPwd: "", description: "",
        },
      });
  }
};

router
  .get('', getCreatePost)
  .post('', uploadWithOriginalFilename.single('thumbnail'), postCreatePost)
  .use(express.static(path.join(path.resolve(), 'public')));

export default router;
