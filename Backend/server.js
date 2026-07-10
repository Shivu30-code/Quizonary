import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import helmet from "helmet";
import compression from "compression";
import rateLimit from "express-rate-limit";


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(compression());
app.use((req, res, next) => {
  const body = { ...req.body };

  if (body.password) {
    body.password = "********";
  }

  if (body.confirmPassword) {
    body.confirmPassword = "********";
  }

  if (body.otp) {
    body.otp = "******";
  }

  console.log("Method:", req.method);
  console.log("Body:", body);

  next();
});
const limiter = rateLimit({
    windowMs: 60 * 1000,
    max: 10
});

app.use("/api/auth", limiter);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "QuickQuiz API Running",
  });
});
app.post("/test", (req, res) => {
  console.log("TEST BODY:", req.body);
  res.json(req.body);
});
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running ${PORT}`);
});