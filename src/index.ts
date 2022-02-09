import express from 'express';
import { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Application workfsdfsdfsds!');
});

app.listen(8080, () => {
  console.log('Application started on port 234fsdf4!');
});