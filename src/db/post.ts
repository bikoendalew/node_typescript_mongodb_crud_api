import mongoose  from "mongoose";

const postSchema=new mongoose.Schema({
     title:{type:String,required:true },
     body:{type:String,required:true }
});

export const postModel= mongoose.model('post',postSchema);

export const getPost=()=>postModel.find();
export const getPostById=(id:string)=>postModel.findById(id);
export const getPostByTitle=(title:string)=>postModel.findOne({title});
export const createPost=(values:Record<string,any>)=>new postModel(values).save().then((post)=>post.toObject());
export const deletePost=(id:string)=>postModel.findByIdAndDelete({_id:id});
export const updatePost=(id:string, values:Record<string,any>)=>postModel.findByIdAndUpdate(id,values);