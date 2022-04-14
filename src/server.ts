import express from 'express';
import { Request, Response } from 'express';
import dotenv from 'dotenv';
//const { getConection } = require('../database/connection');
import { makeQuery } from './database/connection';
import {authRouter} from './routes/auth.router';
import { adminRouter } from './routes/admin.router';

import cors from 'cors';
import { secretaryRouter } from './routes/secretary.router';
const app = express();
dotenv.config();
const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

app.use(cors(options));
app.use( express.json() )

app.get('/', (req: Request, res: Response) => {
  res.send('Application workfsdfsdfsds!');
});

app.use('/api/auth', authRouter);
app.use('/api/admin', adminRouter);
app.use('/api/secretary', secretaryRouter);

app.listen(8080, () => {
  console.log('Application started on port 8080!');
});


//makeQuery('select @@VERSION');
console.log("hola")
//makeQuery('EXEC SelectAllCustomers;').then(data => console.log(data));
//makeQuery( " EXEC create_doctor 'doctorSP@gmail.com', 'doctorSP hernandez', '123456', '09/28/1991' , '43tfbt34ycz', 'sahz454354r', '654321'  " ).then( data=> console.log(data) )

//getConection();

