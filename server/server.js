import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js";
import dotenv from "dotenv";

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// * env variables separately placed for security concern
const process = dotenv.config().parsed;
const PORT = process.PORT || 8000;
const CONNECTION_URL = process.CONNECTION_URL;

// * connection to mongodb cloud database
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on port : ${PORT}`))
  )
  .catch((err) => console.log(err.message));

// mongoose.set("useFindAndModify", false);

app.use("/posts", postRoutes);
