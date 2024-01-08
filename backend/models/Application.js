import mongoose from "mongoose";

const applicationSchema = mongoose.Schema({
  job_id: { type: mongoose.Schema.Types.ObjectId, ref: "Job" },
  candidate_id: { type: mongoose.Schema.Types.ObjectId, ref: "Candidate" },
  date_applied: { type: String, required: true },
  state_id: { type: mongoose.Schema.Types.ObjectId, ref: "State" },
});

const Application = mongoose.model("Application", applicationSchema);
export default Application;
