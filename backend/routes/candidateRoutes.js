import express from "express";
import { createEducation, createExperience, getCandidates, getEducation, getExperience, getProfile, loginCandidate, profile, registerCandidate, updateEducation, updateExperience, updateProfile } from "../controllers/candidateController.js";
import checkAuthCandidate from "../middleware/checkAuthCandidate.js";
import multer from "multer";
import path from "path";


const router = express.Router();

router.post('/register', registerCandidate);
router.post("/login", loginCandidate);
router.get("/profile", checkAuthCandidate, profile);
router.get("/get-profile/:id", checkAuthCandidate, getProfile);

router.post("/create-education/:id", checkAuthCandidate, createEducation);
router.get("/get-education/:id", getEducation);
router.put("/update-education/:id", checkAuthCandidate ,updateEducation );

router.post("/create-experience/:id", checkAuthCandidate, createExperience);
router.get("/get-experience/:id", getExperience);
router.put("/update-experience/:id", checkAuthCandidate, updateExperience);

router.put("/profile-update/:id",checkAuthCandidate ,updateProfile );

router.get("/get-candidates", getCandidates);

export default router;