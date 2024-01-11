import express from "express";
import checkAuthCandidate from "../middleware/checkAuthCandidate.js";
import { createSocialCandidate, getSocialCandidate, updateSocialCandidate } from "../controllers/networksController.js";

const router = express.Router();

router.post("/create-network", checkAuthCandidate ,createSocialCandidate);
router.put("/update-network/:id", checkAuthCandidate, updateSocialCandidate);
router.get("/get-network", checkAuthCandidate , getSocialCandidate );


export default router;