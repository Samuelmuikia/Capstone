const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  customer: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  uiux: {
    type: String,
    required: true
  },
  blockchain: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  coding: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  seo: [String]
});

const course = mongoose.model("course", courseSchema);

module.exports = course;
