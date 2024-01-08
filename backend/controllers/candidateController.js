import Candidate from "../models/Candidate.js";
import generarJWT from "../helpers/generarJWT.js";

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

async function profile(req, res){
    res.json(req.candidate);
} 

export { registerCandidate, loginCandidate, profile };
