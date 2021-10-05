import express from 'express';
import Post from '../schemas/Post.js';
import crudPostRouter from './crudPost.js';


const router = express.Router();

router.use('/api', crudPostRouter);


export default router;
