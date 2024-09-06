import express from "express";
//import "dotenv/config";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use("/api/products", productRoutes);

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.listen(port, () => {
  connectDB();
  console.log(`Server started at http://localhost:${port}`);
});
