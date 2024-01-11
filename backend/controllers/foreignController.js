import Categorie from "../models/Categorie.js";
import Gender from "../models/Gender.js";
import Language from "../models/Language.js";
import Location from "../models/Location.js";
import Qualification from "../models/Qualification.js";
import SalaryType from "../models/SalaryType.js";
import Social from "../models/Social.js";


async function getGenders(req, res){
    try {
        const genders = await Gender.find();
        res.json(genders);
        console.log("Hola Mundo");
    } catch (error) {
        res.json(error);
    }
}

async function getSalaryType(req, res){
    try {
        const salaryType = await SalaryType.find();
        res.json(salaryType);
    } catch (error) {
        res.json(error);
    }
}

async function getQualification(req, res){
    try {
        const qualifications = await Qualification.find();
        res.json(qualifications);
    } catch (error) {
        res.json(error);
    }
}

async function getCategories(req, res){
    try {
        const categories = await Categorie.find();
        res.json(categories);
    } catch (error) {
        res.json(error);
    }
}

async function getLanguages(req, res){
    try {
        const languages = await Language.find();
        res.json(languages);
    } catch (error) {
        res.json(error);
    }
}

async function getLocations(req, res){
    try {
        const locations = await Location.find();
        res.json(locations);
    } catch (error) {
        res.json(error);
    }
}

async function getSocialNetworks(req, res){
    try {
        const socials = await Social.find();
        res.json(socials);
    } catch (error) {
        res.json(error);
    }
}

export {
  getGenders,
  getLanguages,
  getSalaryType,
  getQualification,
  getCategories,
  getLocations,
  getSocialNetworks,
};