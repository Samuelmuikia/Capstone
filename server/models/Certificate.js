const mongoose = require("mongoose");

const certificateSchema = new mongoose.Schema({
  orgLogo: {
    type: "string"
  },
  issuedTo: {
    type: "string"
  },
  type: {
    type: "string"
  },
  issuedFor: {
    type: "string"
  },
  issuedOn: {
    type: "string"
  },
  issuerAuthority1Sign: {
    type: "string"
  },
  issuerAuthority1Name: {
    type: "string"
  },
  issuerAuthority2Sign: {
    type: "string"
  },
  issuerAuthority2Name: {
    type: "string"
  }
});

const Certificate = mongoose.model("Certificate", certificateSchema);

module.exports = Certificate;
