import mongoose from "mongoose";

const employerCommentsSchema = mongoose.Schema({
  employer_id: { type: mongoose.Schema.Types.ObjectId, ref: "Employer" },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
});

const EmployerComments = mongoose.model(
  "EmployerComments",
  employerCommentsSchema
);
export default EmployerComments;
