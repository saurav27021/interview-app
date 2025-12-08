import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { ENV } from './lib/env.js';


dotenv.config();

const app = express();
console.log(ENV.PORT)
const __dirname = path.resolve();

if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

app.get('/health', (req, res) => {
  res.send('Hello World!');
});

app.listen(ENV.PORT, () => {
  console.log('Server is running on port 3000');
});