const { Router } = require("express");
const Certificate = require("../models/Certificates");

const router = Router();

// Create record in MongoDB Atlas using Mongoose.js ORM
router.post("/", (request, response) => {
  const newCertificate = new Certificate(request.body);
  newCertificate.save((error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

// Get (read) all records from the collection
router.get("/", (request, response) => {
  Certificate.find({}, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

// Get a single record by ID using a query parameter
router.get("/:id", (request, response) => {
  Certificate.findById(request.params.id, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

//Deleting a Record
router.delete("/:id", (request, response) => {
  Certificate.findByIdAndRemove(request.params.id, {}, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

//Setting up Update //Finally, Updating a Record
router.put("/:id", (request, response) => {
  const body = request.body;
  Certificate.findByIdAndUpdate(
    request.params.id,
    {
      $set: {
        // Take note that the customer is not included, so it can't
        crust: body.uiux,
        cheese: body.blockchain,
        sauce: body.seo,
        toppings: body.coding
      }
    },
    {
      new: true,
      upsert: true
    },
    (error, record) => {
      if (error) return response.status(500).json(error);
      return response.json(record);
    }
  );
});

module.exports = router;
