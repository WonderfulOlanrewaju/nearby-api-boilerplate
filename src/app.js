import express from "express";
import { router as AuthControllers } from "./routes/auth.route";
export const app = express();
export const environment = process.env.NODE_ENV;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(201).json({
    message: "Hi from nearby-api",
  });
});

app.use("/api/v1/auth", AuthControllers);
