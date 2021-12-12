let CityListClient = require("./client");
let Router = require("express");


let router = new Router();

router.post("/setCities", CityListClient.setCities);
router.get("/getCities", CityListClient.getCities);

module.exports = router;
