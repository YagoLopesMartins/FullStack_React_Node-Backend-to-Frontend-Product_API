import express from "express";
import "dotenv/config";

const app = express();

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
