import express from "express";
import { loginCandidate, profile, registerCandidate, updateProfile } from "../controllers/candidateController.js";
import checkAuthCandidate from "../middleware/checkAuthCandidate.js";
import multer from "multer";
import path from "path";


const router = express.Router();

router.post('/register', registerCandidate);
router.post("/login", loginCandidate);
router.get("/profile", checkAuthCandidate, profile);



router.put("/profile-update/:id",checkAuthCandidate ,updateProfile );


export default router;