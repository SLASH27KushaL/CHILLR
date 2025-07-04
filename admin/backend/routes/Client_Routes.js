// features/Client_Routes.js
import express from "express";
import { signup, login, logout } from "../controllers/user_controller.js";

const client_router = express.Router();

// POST /api/clients/signup
client_router.post("/signup", signup);

// POST /api/clients/login
client_router.post("/login", login);

client_router.post("/logout",logout);
export default client_router;
