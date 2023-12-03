import { getPostById } from '../db/post';
import express from 'express';

export const PostExist = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
      const { id } = req.params;
      const post = await getPostById(id);
      if(!post){
        return res.status(400).json("Post Does't Exist");
      }
      
      next();
    } catch (error) {
      console.log(error);
      return res.status(500).json("server error");
    }
  }