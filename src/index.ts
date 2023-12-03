import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './router/index';
const app =express();

app.use(cors({
    credentials:true
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use('/',router());
const server=http.createServer(app);

server.listen(4000,()=>{
    console.log("Server running on: http://localhost:4000");
})


const mongoUrl="";

 mongoose.Promise=Promise;
 mongoose.connect(mongoUrl);
 mongoose.connection.on('error',(error:Error)=>console.log(error));
