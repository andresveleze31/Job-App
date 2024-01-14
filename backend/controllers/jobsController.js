import Job from "../models/Job.js";

async function createJob(req, res) {

  try {
    const job = await Job.create({ ...req.body });
    res.json(job);
  } catch (error) {
    return res.status(403).json({ msg: error.message });
  }
}

async function getJobsFromEmployer(req, res){

    const {id} = req.params;

    try{
        const jobs = await Job.find({ employer_id: id })
          .populate("location_id")
        res.json(jobs);
    } catch (error) {
    return res.status(403).json({ msg: error.message });
  }
}

export { createJob, getJobsFromEmployer };
