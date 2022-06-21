import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js";

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// * connection to mongodb cloud database
const CONNECTION_URL =
  "mongodb+srv://iamnitesh:0727db1113@cluster0.dojsnmr.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

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
