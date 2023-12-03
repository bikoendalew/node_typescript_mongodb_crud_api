import express from 'express';
import post from './post';

const router=express.Router();

export default():express.Router=>{
    post(router);
    return router;
}

