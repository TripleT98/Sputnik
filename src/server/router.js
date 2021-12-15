let CityListClient = require("./client");
let Router = require("express");


let router = new Router();

router.get("/getCities", CityListClient.getCities);

module.exports = router;
