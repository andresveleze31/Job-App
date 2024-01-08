import express from "express";
import { loginCandidate, profile, registerCandidate } from "../controllers/candidateController.js";
import checkAuthCandidate from "../middleware/checkAuthCandidate.js";

const router = express.Router();

router.post('/register', registerCandidate);
router.post("/login", loginCandidate);
router.get("/profile", checkAuthCandidate, profile);


export default router;