import express from "express";

const app = express();

const PORT = 5000;

import homeRoutes from "./routes/studentRoutes.js";
import authRoutes from "./routes/authRoutes.js"

import connectDB from "./config/db.js";
connectDB()

// MiddleWare
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.url)
  next()
})

app.use('/', homeRoutes)
app.use('/login', authRoutes)

app.listen(PORT, () => {
  console.log(`Server is listening at PORT ${PORT}`);
});
