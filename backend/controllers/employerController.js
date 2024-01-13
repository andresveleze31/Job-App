import generarJWT from "../helpers/generarJWT.js";
import Employer from "../models/Employer.js";

async function registerEmployer(req, res) {
  const { email, password } = req.body;

  const existeUsuario = await Employer.findOne({ email });

  if (existeUsuario) {
    const error = new Error("This email is already in use");
    return res.status(404).json({ msg: error.message });
  }

  try {
    const employer = await Employer.create({ email, password });
    res.json(employer);
  } catch (error) {
    console.log(error);
  }
}

async function loginEmployer(req, res) {
  const { email, password } = req.body;

  try {
    const employer = await Employer.findOne({ email });

    if (!employer) {
      const error = new Error("User does no exist");
      return res.status(404).json({ msg: error.message });
    }

    if (await employer.comprobarPassword(password)) {
      res.json({
        _id: employer._id,
        email: employer.email,
        token: generarJWT(employer._id),
      });
    } else {
      const error = new Error("Invalid Password");
      return res.status(403).json({ msg: error.message });
    }
  } catch (error) {
    console.log(error);
  }
}

async function profile(req, res){
    res.json(req.employer)
}

async function getProfile(req, res) {

    const { id } = req.params;

    try {
      const employer = await Employer.findOne({ _id: id });

      if (!employer) {
        return res.status(404).json({ error: "Employer Not Found" });
      }

      return res.json(employer);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
}

async function updateProfile(req, res){
    const { id } = req.params;

    try {
      const profileUpdated = await Employer.findOneAndUpdate(
        { _id: id },
        {
          ...req.body,
        }
      );

      if (!profileUpdated) {
        return res.status(404).json({ error: "Employer Not Found" });
      }

      return res.json(profileUpdated);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
}



export { registerEmployer, loginEmployer, profile, getProfile, updateProfile };
