import express from "express";
export const app = express();
export const environment = process.env.NODE_ENV;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(201).json({
    message: "Hi from nearby-api",
  });
});
