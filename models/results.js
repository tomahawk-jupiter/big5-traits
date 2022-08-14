const mongoose = require("mongoose");
const { Schema } = mongoose;

const ResultSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      min: 1,
      max: 20,
      unique: true,
    },
    openness: {
      type: Number,
      required: true,
    },
    conscientiousness: {
      type: Number,
      required: true,
    },
    extraversion: {
      type: Number,
      required: true,
    },
    agreeableness: {
      type: Number,
      required: true,
    },
    neuroticism: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Result", ResultSchema);
