import express from "express";
import { loginEmployer, profile, registerEmployer } from "../controllers/employerController.js";
import checkAuthEmployer from "../middleware/checkAuthEmployer.js";

const router = express.Router();


router.post("/register", registerEmployer);
router.post("/login", loginEmployer);
router.get("/profile", checkAuthEmployer ,profile);



export default router;