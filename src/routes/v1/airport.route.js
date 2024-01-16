const router = require("express").Router();

const { AirportController } = require("../../controller");

router.post("/:id", AirportController.createAirport);

router.get("/", AirportController.getAllAirport);

router.get("/:id", AirportController.getAirport);

router.put("/:id", AirportController.updateAirport);

router.delete("/:id", AirportController.deleteAirport);

module.exports = router;
