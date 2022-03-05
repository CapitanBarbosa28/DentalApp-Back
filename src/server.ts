import express from 'express';
import { Request, Response } from 'express';
import dotenv from 'dotenv';
//const { getConection } = require('../database/connection');
import { makeQuery } from './database/connection';
import {authRouter} from './routes/auth.router';
import { adminRouter } from './routes/admin.router';

const app = express();
dotenv.config();

app.use( express.json() )

app.get('/', (req: Request, res: Response) => {
  res.send('Application workfsdfsdfsds!');
});

app.use('/api/auth', authRouter);
app.use('/api/admin', adminRouter);

app.listen(8080, () => {
  console.log('Application started on port 8080!');
});


makeQuery('select @@VERSION');
//getConection();

