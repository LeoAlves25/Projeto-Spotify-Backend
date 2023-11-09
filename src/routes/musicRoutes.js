import express from "express";
const router = express.Router();


import musicController from "../controllers/musicController.js";

router.get("/", musicController.getAllMusic);

export default router;