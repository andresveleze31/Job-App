import express from "express";
import { getCategories, getGenders, getLanguages, getLocations, getQualification, getSalaryType, getSocialNetworks } from "../controllers/foreignController.js";


const router = express.Router();


router.get("/genders", getGenders);
router.get("/salaryType", getSalaryType);
router.get("/qualification", getQualification);
router.get("/categories", getCategories);
router.get("/languages", getLanguages);
router.get("/locations", getLocations);
router.get("/socials", getSocialNetworks);


export default router;