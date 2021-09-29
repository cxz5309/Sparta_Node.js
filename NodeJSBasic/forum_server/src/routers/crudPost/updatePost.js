import express from 'express';
import path from 'path';
import Post from '../../schemas/Post.js';
import {upload, uploadWithOriginalFilename} from '../../middlewares.js'

const router = express.Router();

const getUpdatePost = async (req, res) => {
  const {id} = req.params
  const thisPost = await Post.findById(id);

  return res.render('update-post', { messages: {}, content: thisPost });
};

const postUpdatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content, user, password, newThumbnail } = req.body;
  console.log(req.files);
  console.log(req.file);
  console.log(newThumbnail);

  const thumbnailUrl = 'image/' + newThumbnail;
  console.log(id);
  const thisPost = await Post.findById(id);
  console.log(thisPost.userPwd)
  console.log(password)
  if (thisPost.userPwd !== password) {
    console.log("비밀번호가 틀렸습니다!");
    return res.status(406).send();
  }
  // db update
  try {
    await thisPost.updateOne({
      $set: {
        title, userName: user, userPwd: password, description: content, thumbnail: thumbnailUrl
      },
    });
    return res.send({result:"게시글을 수정하였습니다"})
  } catch (error) {
    console.log(error);
    return res.status(400).send();
  }
};

router
  .get('/:id', getUpdatePost)
  .post('/:id', uploadWithOriginalFilename.single('thumbnail'), postUpdatePost)
  .use(express.static(path.join(path.resolve(), 'public')));
  
export default router;
