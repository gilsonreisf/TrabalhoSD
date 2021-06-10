import 'reflect-metadata'
import express, { NextFunction, Request, Response } from 'express';

import routes from "./routes/index";
import "./container";
import cors from 'cors';
import "./typeorm/index";
import 'reflect-metadata';
import "express-async-errors";
import AppError from './errors/AppError';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes); 

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
  

app.listen(3333, () => console.log("Server is running!"));
