import Gender from "../models/Gender.js";

import SalaryType from "../models/SalaryType.js";
import Qualification from "../models/Qualification.js"
import Categorie from "../models/Categorie.js";
import Language from "../models/Language.js";
import Social from "../models/Social.js";
import Location from "../models/Location.js";

const salaryType = [
  {
    salaryType: "Monthly",
  },
  {
    salaryType: "Weekly",
  },
  {
    salaryType: "Daily",
  },
  {
    salaryType: "Hourly",
  },
  {
    salaryType: "Yearly",
  },
];

const qualification = [
  {
    qualification: "Certificate",
  },
  {
    qualification: "Associate Degree",
  },
  {
    qualification: "Bachelor Degree",
  },
  {
    qualification: "Masters Degree",
  },
  {
    qualification: "Doctorate Degree",
  },
];

const categories = [
  {
    categorie: "Accounting"
  },
  {
    categorie: "Customer Service"
  },
  {
    categorie: "Engineering"
  },
  {
    categorie: "IT & Networking"
  },
  {
    categorie: "Project Manager"
  },
  {
    categorie: "Sales & Marketing"
  },
  {
    categorie: "Writing"
  },
];

const languages = [
  {
    language: "English"
  },
  {
    language: "Turkish"
  },
  {
    language: "Japanese"
  },
  {
    language: "French"
  },
  {
    language: "German"
  },
  {
    language: "Spanish"
  },
];

const socialNetworks = [
  {
    social_name: "Facebook",
    imagen: "",
  },
  {
    social_name: "Twitter",
    imagen: "",
  },
  {
    social_name: "Google",
    imagen: "",
  },
  {
    social_name: "Pinterest",
    imagen: "",
  },
  {
    social_name: "LinkedIn",
    imagen: "",
  },

];

const locations = [
  { location: "United States" },
  { location: "Canada" },
  { location: "United Kingdom" },
  { location: "Australia" },
  { location: "France" },
  { location: "Germany" },
  { location: "Japan" },
  { location: "Spain" },
  { location: "Colombia" },
];


async function ingresarDatos(){

    await SalaryType.insertMany(salaryType);
    await Qualification.insertMany(qualification);
    await Categorie.insertMany(categories);
    await Language.insertMany(languages);
    await Social.insertMany(socialNetworks);
    await Location.insertMany(locations);

}

export {
    ingresarDatos
}