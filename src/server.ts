import 'reflect-metadata'
import express, { NextFunction, Request, Response } from 'express';
import socketIO from 'socket.io'
import routes from "./routes/index";
import "./container";
import cors from 'cors';
import "./typeorm/index";
import 'reflect-metadata';
import "express-async-errors";
import AppError from './errors/AppError';
import http from 'http';
import path from 'path'

const app = express();

const io = new socketIO.Server();

const server = http.createServer(app);

io.attach(server);

io.on('connection', socket => {
  console.log(`${socket.handshake.address}`);
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
  io.emit('status', 'Hello from Socket.io');

  io.on('disconnect', () => {
      console.log('client disconnected');
  })
});

app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(cors());
app.use(routes); 
app.get('/',(req,res)=>{
  res.sendFile(__dirname + '/index.html')
})
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return res.status(err.statusCode).json({
        status: "error",
        message: err.message,
      });
    }
  
    console.log(err);
  
    return res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  });
  
  module.exports=io;


server.listen(3333, () => console.log("Server is running!"));
