import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";

import notesRoute from "./routes/notesRoute.js";
import { errorHandler, notFound } from "./middlewares/errorMiddlewares.js";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// db connection
connectDB();

// 3rd party middleware
app.use(express.json());
app.use(helmet());

// routes
app.use("/api/notes", notesRoute);

// custom middleware
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(
    `Server started in ${process.env.NODE_ENV} mode on PORT: ${PORT}`
  );
});
