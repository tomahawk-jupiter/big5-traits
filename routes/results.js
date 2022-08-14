const express = require("express");
const router = express.Router();
const Results = require("../models/results");

// GET all user results
router.get("/", async (req, res) => {
  try {
    const allResults = await Results.find({}).limit(100);
    res.status(200).json(allResults);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET a single user's results
router.get("/:name", async (req, res) => {
  const username = req.params.name;
  try {
    const singleResult = await Results.findOne({ username });
    if (!singleResult) {
      return res.status(202).json("available");
    }
    return res.status(200).json(singleResult);
  } catch (error) {
    res.status(500).json(error);
  }
});

// POST users results
router.post("/:name", async (req, res) => {
  const username = req.params.name;
  const {
    openness,
    conscientiousness,
    extraversion,
    agreeableness,
    neuroticism,
  } = req.body;

  try {
    const user = await Results.findOne({ username });
    if (user) {
      return res.status(500).json("Name already used!");
    }
    const newResultEntry = new Results({
      username,
      openness,
      conscientiousness,
      extraversion,
      agreeableness,
      neuroticism,
    });
    const savedPost = await newResultEntry.save();
    res.status(200).json("Results saved!");
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
