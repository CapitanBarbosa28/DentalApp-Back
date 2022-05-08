import express from 'express';
import { Request, Response } from 'express';
import dotenv from 'dotenv';
//const { getConection } = require('../database/connection');
import { makeQuery } from './database/connection';
import {authRouter} from './routes/auth.router';
import { adminRouter } from './routes/admin.router';

import cors from 'cors';
import { secretaryRouter } from './routes/secretary.router';
import { doctorRouter } from './routes/doctor.router';

const morgan        = require('morgan');
const multer        = require('multer');
const uuid          = require('uuid').v4
const path          = require('path');


const app = express();
dotenv.config();
const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

app.use(cors(options));
app.use( express.json() )

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
const storage = multer.diskStorage({
  destination: path.join(__dirname, 'public/img/uploads'),
  filename: (req: any, file: any, cb: any , filename: any) => {
      console.log(file);
      cb(null, uuid() + path.extname(file.originalname));
  }
}) 
app.use(multer({storage}).single('image'));

app.get('/', (req: Request, res: Response) => {
  res.send('Application workfsdfsdfsds!');
});

app.use('/api/auth', authRouter);
app.use('/api/admin', adminRouter);
app.use('/api/secretary', secretaryRouter);
app.use('/api/doctor', doctorRouter);

app.listen(8080, () => {
  console.log('Application started on port 8080!');
});


//makeQuery('select @@VERSION');
console.log("hola")
//makeQuery('EXEC SelectAllCustomers;').then(data => console.log(data));
//makeQuery( " EXEC create_doctor 'doctorSP@gmail.com', 'doctorSP hernandez', '123456', '09/28/1991' , '43tfbt34ycz', 'sahz454354r', '654321'  " ).then( data=> console.log(data) )

//getConection();