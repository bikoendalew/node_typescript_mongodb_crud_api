
import express from 'express';
import { AddPost, deletepost, getAllPost, update_post, welcome } from '../controllers/post';
import {PostExist} from '../middleware/post'

export default (router:express.Router)=>{
    router.get('/',welcome);
    router.get('/post',getAllPost);
    router.post('/post',AddPost);
    router.delete('/post:id', PostExist, deletepost);
    router.patch('/post:id', PostExist, update_post);
}