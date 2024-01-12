import SocialCandidate from "../models/SocialCandidate.js";

async function createSocialCandidate(req, res) {
  try {
    const socialCandidate = await SocialCandidate.create({
      candidate_id: req.body.candidate_id,
      social_id: req.body.social_id,
      url: req.body.url,
    });

    res.status(200).json(socialCandidate);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

async function updateSocialCandidate(req, res) {
  try {
    const socialCandidate = await SocialCandidate.findOneAndUpdate(
      { _id: req.params.id },
      {
        url: req.body.url,
      }
    );
    res.status(200).json(socialCandidate);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

async function getSocialCandidate(req, res) {
  console.log(req.query.social_id, req.query.candidate_id);
  try {
    const socialCandidate = await SocialCandidate.find({
      social_id: req.query.social_id,
      candidate_id: req.query.candidate_id,
    });
    res.status(200).json(socialCandidate);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

async function getSocialsCandidate(req, res) {
  const { id } = req.params;

  try {
    const socials = await SocialCandidate.find({ candidate_id: id });
    res.status(200).json(socials);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

export {
  createSocialCandidate,
  updateSocialCandidate,
  getSocialCandidate,
  getSocialsCandidate,
};
