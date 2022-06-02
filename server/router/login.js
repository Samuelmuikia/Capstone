const { Router } = require("express");
const course = require("../models/course");

const router = Router();

// Create record in MongoDB Atlas using Mongoose.js ORM
router.post("/", (request, response) => {
  const newCourse = new Course(request.body);
  newCourse.save((error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

module.exports = router;
