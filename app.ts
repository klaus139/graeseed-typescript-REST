import express, { Request, Response, NextFunction } from 'express';
require('dotenv').config();

export const app = express();


import cookieParser from 'cookie-parser';
import userRouter from './routes/user.route';

//body-paser
app.use(express.json({limit: '50mb'}));

//cookier-parser
app.use(cookieParser());


//testing api
app.get('/test', (req:Request, res:Response, next:NextFunction)=> {
    res.status(200).json({
        success: true,
        message: 'API is working'
    })
})

app.use('/api/v1', userRouter);


app.all('*', (req:Request, res:Response, next:NextFunction) => {
    const err = new Error(`Route ${req.originalUrl} not found`) as any;
    err.statusCode = 400;
    next(err);
})


