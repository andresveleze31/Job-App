import mongoose from "mongoose";

const employerSchema = mongoose.Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    photo: { type: String },
    fullname: { type: String },
    website: { type: String },
    size: { type: Number },
    founded: { type: Number },
    number: { type: Number },
    categorie_id: { type: mongoose.Schema.Types.ObjectId, ref: "Categorie" },
    aboutme: { type: String },
    address: { type: String },
    location_id: { type: mongoose.Schema.Types.ObjectId, ref: "Location" },
    long: { type: String },
    lat: { type: String },
    video: { type: String },
  },
  {
    timestamps: true,
  }
);

const Employer = mongoose.model("Employer", employerSchema);
export default Employer;
