import express from "express";
const router = express.Router();

import userController from "../controllers/userController.js";

router.get("/", userController.getAllUsers);
router.post("/", userController.postUser);
router.get("/email=:email", userController.getUserByEmail);
router.post("/login", userController.getUserByEmailAndPassword);

export default router;
