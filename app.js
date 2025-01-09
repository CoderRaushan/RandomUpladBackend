import express, { json } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from 'cookie-parser';
import UserRouter from "./routes/userRoute.js";
const app = express();
dotenv.config();
app.use(express.json());
app.use(cookieParser()); // Make sure to add this line
const corsOptions = {
  origin: ["https://randomupload.netlify.app","http://127.0.0.1:5500"], 
  credentials: true, 
};
app.use(cors(corsOptions));
const port = process.env.PORT || 9090;
const MongodbURI = process.env.mongodb_URI;
try 
{
  mongoose.connect(MongodbURI,{
  })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log("MongoDB connection error", err))
}catch(err)
{
 console.log("connetion error",err);
}

app.get("/", (req, res) => {
  res.send("welcome to root page:");
});

app.use("/user",UserRouter);  

app.listen(port, () => {
  console.log(`server is running at port:localhost:${port}`);
});
