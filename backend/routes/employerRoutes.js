import express from "express";
import { getEmployers, getGeneralEmployer, getProfile, loginEmployer, profile, registerEmployer, updateProfile } from "../controllers/employerController.js";
import checkAuthEmployer from "../middleware/checkAuthEmployer.js";

const router = express.Router();


router.post("/register", registerEmployer);
router.post("/login", loginEmployer);
router.get("/profile", checkAuthEmployer ,profile);

router.get("/get-profile/:id", getProfile);
router.put("/update-profile/:id", checkAuthEmployer, updateProfile);

router.get("/get-all-employers", getEmployers);
router.get("/get-employer/:id", getGeneralEmployer);


export default router;