import express from "express";
import { getProfile, loginEmployer, profile, registerEmployer, updateProfile } from "../controllers/employerController.js";
import checkAuthEmployer from "../middleware/checkAuthEmployer.js";

const router = express.Router();


router.post("/register", registerEmployer);
router.post("/login", loginEmployer);
router.get("/profile", checkAuthEmployer ,profile);

router.get("/get-profile/:id", getProfile);
router.put("/update-profile/:id", checkAuthEmployer, updateProfile);



export default router;