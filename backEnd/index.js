import express from 'express';
import dotenv from "dotenv"
import cookieParser from 'cookie-parser';
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/auth.routes.js"
import connectToMongoDB from './db/connectToMongoDB.js';
import userRoutes from "./routes/user.routes.js";

dotenv.config({
    path: '../.env'
})

const app = express();

const PORT = process.env.PORT || 9000;

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("api/messages", messageRoutes)
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`running on port ${PORT}`)
});