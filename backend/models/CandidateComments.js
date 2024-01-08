import mongoose from "mongoose";

const candidateCommentsSchema = mongoose.Schema({
  candidate_id: { type: mongoose.Schema.Types.ObjectId, ref: "Candidate" },
  rating: { type: Number, required: true },
  comment: {type: String, required: true}
});

const CandidateComments = mongoose.model(
  "CandidateComments",
  candidateCommentsSchema
);
export default CandidateComments;