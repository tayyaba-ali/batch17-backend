import mongoose from "mongoose";

import dotenv from "dotenv"
import chalk from "chalk";

dotenv.config()

const dbConnnection = process.env.MONGODB_URL


const connectDB = async () => {
    try {
        await mongoose.connect(dbConnnection);
        console.log(chalk.blue.bgGreenBright.bold('MongoDB connected successfully'));
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
      
    }
};

export default connectDB