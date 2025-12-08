import express from 'express';
import dotenv from 'dotenv';
import { ENV } from './lib/env.js';
dotenv.config();

const app = express();
console.log(ENV.PORT)

app.get('/health', (req, res) => {
  res.send('Hello World!');
});

app.listen(ENV.PORT, () => {
  console.log('Server is running on port 3000');
});