import mongoose from 'mongoose';
import { ENV } from './env.js';

let isConnected = false;

export const connectDB = async () => {
    if (isConnected) return;

    try {
        if (!ENV.DB_URL) {
            throw new Error("DB_URL is not defined in environment variables");
        }
        const conn = await mongoose.connect(ENV.DB_URL);
        isConnected = true;
        console.log("connected to mongodb", conn.connection.host);
    } catch (err) {
        console.error("Error connecting to mongodb", err);
    }
}
