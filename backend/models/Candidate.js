import mongoose from "mongoose";

const candidateSchema = mongoose.Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    photo: { type: String },
    fullname: { type: String },
    birth: { type: Number },
    number: { type: Number },
    gender_id: { type: mongoose.Schema.Types.ObjectId, ref: "Gender" },
    age: { type: Number },
    salary: { type: Number },
    salaryType: { type: mongoose.Schema.Types.ObjectId, ref: "SalaryType" },
    qualification_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Qualification",
    },
    experiencetime: { type: Number },
    categorie_id: { type: mongoose.Schema.Types.ObjectId, ref: "Categorie" },
    language_id: { type: mongoose.Schema.Types.ObjectId, ref: "Language" },
    jobtitle: { type: String },
    aboutme: { type: String },
    address: { type: String },
    location_id: { type: mongoose.Schema.Types.ObjectId, ref: "Location" },
    long: { type: String },
    lat: { type: String },
    video: { type: String },
    cv: { type: String },
  },
  {
    timestamps: true,
  }
);

const Candidate = mongoose.model("Candidate", candidateSchema);
export default Candidate