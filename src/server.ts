import 'reflect-metadata'
import express from 'express';
import "./database";
import { router } from './routes';

const app = express();

app.use(express.json());

app.use(router); 
app.set('trust proxy', true);

app.get("/users",(req,res)=>{
    res.send(`Ip: ${req.socket.address}`);
})

app.get('/',(req,res)=>{
    res.send(`Ip: ${req.socket.address}`);
});

app.listen(3333, () => console.log("Server is running!"));