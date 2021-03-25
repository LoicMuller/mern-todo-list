import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import todoRoutes from "./routes/todos.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/todos", todoRoutes);

const CONNECTION_URL =
  "mongodb+srv://loicmuller01:Undercover00@cluster0.vrfoz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);
