import express from "express";
import checkAuthEmployer from "../middleware/checkAuthEmployer.js";
import { createJob, getJobsFromEmployer } from "../controllers/jobsController.js";


const router = express.Router();


router.post("/create-job", checkAuthEmployer, createJob  );
router.get("/jobs-employer/:id", checkAuthEmployer, getJobsFromEmployer );

export default router;