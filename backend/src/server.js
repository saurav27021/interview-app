import express from 'express';
import path from 'path';
import { ENV } from './lib/env.js';
import { connectDB } from './lib/db.js';
import cors from 'cors';
import { serve } from 'inngest/express';
import { inngest } from './lib/inngest.js';



const app = express();
console.log(ENV.PORT)
const __dirname = path.resolve();

app.use(express.json());

app.use(cors({origin:ENV.CLIENT_URL, credentials:true}));

app.use("/api/inngest",serve({client:inngest , functions}));

app.get('/health', (req, res) => {
  res.send('Hello World!');
});

if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}



const startServer = async () => {
  try{
    await connectDB();
    app.listen(ENV.PORT, () => {
      console.log(`Server is running on port ${ENV.PORT}`);
    });
  }catch(err){
    console.log("Failed to start server", err);
  }
};

startServer();