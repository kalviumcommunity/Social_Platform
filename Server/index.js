import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors';
import AuthRoute from './Routes/AuthRoute.js'
import UserRoute from './Routes/UserRoute.js'
import PostRoute from './Routes/PostRoute.js'
import UploadRoute from './Routes/UploadRoute.js'
import ChatRoute from './Routes/ChatRoute.js'
import MessageRoute from './Routes/MessageRoute.js'

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors())

// to serve images inside public folder
app.use(express.static('public')); 
app.use('/images', express.static('images'));

// Connect to MongoDB
<<<<<<< HEAD
mongoose.connect(process.env.MONGO_DB)
=======
mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true })
>>>>>>> ea6e5140600214e811ca7694c7df5a46e3babfeb
  .then(() =>
    app.listen(5000, () =>
      console.log(`Listening at port 5000`)
    )
  )
  .catch((error) => console.log(error));

  app.use('/auth', AuthRoute)
  app.use('/user', UserRoute)
  app.use('/posts', PostRoute)
  app.use('/upload', UploadRoute)
  app.use('/chat', ChatRoute)
  app.use('/message', MessageRoute)