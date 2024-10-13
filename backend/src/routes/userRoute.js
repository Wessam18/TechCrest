import express from "express";
import { login, register } from "../services/userService.js";

const router = express.Router();

router.post("/register", async (request, response) => {
  try {
    const { userName, email, password } = request.body;
    console.log(request.body);
    const { statusCode, data } = await register({
      userName,
      email,
      password,
    });
    response.status(statusCode).json(data);
  } catch {
    response.status(500).send("Something went wrong!");
  }
});

router.post("/login", async (request, response) => {
  try {
    const { email, password } = request.body;
    const { statusCode, data } = await login({ email, password });
    response.status(statusCode).json(data);
  } catch {
    response.status(500).send("Something went wrong!");
  }
});

export default router;