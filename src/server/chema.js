let mongoose = require("mongoose");

let SityList = new mongoose.Schema({
  country:{type: String, required: true},
  city:{type: String,  required: true},
  coords:{
    lat:{type: String,  required: true},
    lon:{type: String,  required: true}
  }
});

let City = mongoose.model("SityList", SityList);
module.exports = City;
