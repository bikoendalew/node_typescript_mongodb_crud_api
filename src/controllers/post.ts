import express from 'express';
import { createPost, deletePost, getPost, getPostById, getPostByTitle, updatePost } from '../db/post';

//getallpost
export const getAllPost= async(req:express.Request,res:express.Response)=>{
    try{
          const data= await getPost();
          return res.status(200).json(data);        
    }catch(error){
        console.log(error);
        return res.status(500).json("Server Errors");
    }
}

//Addpost
export const AddPost=async(req:express.Request,res:express.Response)=>{
    try{
        const {title,body}=req.body;
        if(!title||!body){
        return res.status(400).json('All field Is Required');
        }

        const titleExist=await getPostByTitle(title);
        if(titleExist){
            return res.status(400).json('This Title is Exist');
        }

        const post=await createPost({title,body});
        return res.status(200).json(post).end();
    }
    catch(error){
        console.log(error);
    return res.status(500).json("Server Errors");
}
}

//update post
export const update_post=async(req:express.Request,res:express.Response)=>{
   try{
   const {id}=req.params;
   const {body}=req.body;
    
   if (!body) {
    return res.status(400).json("Body Required");
  }

  const post = await getPostById(id);
  
  post.body = body;
  await body.save();

  return res.status(200).json(post).end();

   const update=await updatePost(id,body);
   return res.status(200).json(update);

    }catch(err){
        console.log(err);
        return res.status(500).json("Server Error");
    }
   
}

//delete post
export const deletepost=async(req:express.Request,res:express.Response)=>{

    try{
      const {id}=req.params;
      
      const deletedPost=await deletePost(id);
      return res.json(deletedPost);
    }catch(error){
        console.log(error);
    return res.status(500).json("Server Errors");
}
}

export const welcome=async(req:express.Request,res:express.Response)=>{

    try{
      
      return res.status(200).json("Welcome To Typscript Node Mongodb Crud operations");
    }catch(error){
        console.log(error);
    return res.status(500).json("Server Errors");
}
}
