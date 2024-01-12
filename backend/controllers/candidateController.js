import Candidate from "../models/Candidate.js";
import Education from "../models/Education.js";
import generarJWT from "../helpers/generarJWT.js";
import multer from "multer";
import Experience from "../models/Experience.js";

//Register Candidate
async function registerCandidate(req, res) {
  const { email, password } = req.body;

  const existeUsuario = await Candidate.findOne({ email });

  if (existeUsuario) {
    const error = new Error("This email is already in use");
    return res.status(404).json({ msg: error.message });
  }

  try {
    const candidate = await Candidate.create({ email, password });
    res.json(candidate);
  } catch (error) {
    console.log(error);
  }
}

//Login Candidate
async function loginCandidate(req, res) {
  const { email, password } = req.body;

  try {
    const candidate = await Candidate.findOne({ email });

    if (!candidate) {
      const error = new Error("User does no exist");
      return res.status(404).json({ msg: error.message });
    }

    //Comprobar si el password es igual
    if (await candidate.comprobarPassword(password)) {
      res.json({
        _id: candidate._id,
        email: candidate.email,
        token: generarJWT(candidate._id),
      });
    } else {
      const error = new Error("Invalid Password");
      return res.status(403).json({ msg: error.message });
    }
  } catch (error) {
    console.log(error);
  }
}

async function getProfile(req, res) {
  const { id } = req.params;

  try {
    const candidate = await Candidate.findOne({ _id: id });

    if (!candidate) {
      return res.status(404).json({ error: "Candidate Not Found" });
    }

    return res.json(candidate);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function updateProfile(req, res) {
  const { id } = req.params;
  console.log(req.body.cv);

  try {
    const profileUpdated = await Candidate.findOneAndUpdate(
      { _id: id },
      {
        ...req.body,
      }
    );

    if (!profileUpdated) {
      return res.status(404).json({ error: "Candidate Not Found" });
    }

    return res.json(profileUpdated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function profile(req, res) {
  res.json(req.candidate);
}

async function createExperience(req, res) {
  const { id } = req.params;
  const { title, company, year, description } = req.body;

  console.log(title, company, year, description);
  try {
    const experience = await Experience.create({
      title,
      company,
      years: year,
      description,
      candidate_id: id,
    });
    res.json(experience);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

}

async function createEducation(req, res) {
  const { id } = req.params;
  const { title, academy, year, description } = req.body;

  try {
    const education = await Education.create({
      title,
      academy,
      years: year,
      description,
      candidate_id: id,
    });
    res.json(education);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getExperience(req, res){
  const { id } = req.params;

  try {
    const experience = await Experience.find({ candidate_id: id });
    res.json(experience);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}


async function getEducation(req, res) {
  const { id } = req.params;

  try {
    const education = await Education.find({ candidate_id: id });
    res.json(education);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function updateExperience(req, res){
  const { id } = req.params;

    try {
      const experienceUpdated = await Experience.findOneAndUpdate(
        { _id: id },
        {
          ...req.body,
        }
      );

      if (!experienceUpdated) {
        return res.status(404).json({ error: "Experience Not Found" });
      }

      return res.json(experienceUpdated);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
}

async function updateEducation(req, res) {
  const { id } = req.params;

  try {
    const educationUpdated = await Education.findOneAndUpdate(
      { _id: id },
      {
        ...req.body,
      }
    );

    if (!educationUpdated) {
      return res.status(404).json({ error: "Education Not Found" });
    }

    return res.json(educationUpdated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export {
  registerCandidate,
  loginCandidate,
  profile,
  updateProfile,
  getProfile,
  createEducation,
  getEducation,
  updateEducation,
  createExperience,
  updateExperience,
  getExperience
};
