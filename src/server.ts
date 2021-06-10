import 'reflect-metadata'
import express from 'express';

import routes from "./routes/index";
import "./container";
import cors from 'cors';
import "./typeorm/index";
import 'reflect-metadata';
import "express-async-errors";

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes); 


app.listen(3333, () => console.log("Server is running!"));
