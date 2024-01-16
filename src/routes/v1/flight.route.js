const router = require("express").Router();

const { FlightController } = require("../../controller");
const { FlightRepository } = require("../../repository");

router.post("/", FlightController.createFlight);

router.get("/", FlightController.getAllFlight);

router.get("/:id", FlightController.getFlight);

router.put("/:id", FlightController.updateFlight);

router.delete("/:id", FlightController.deleteFlight);

router.patch("/seats/:id", FlightController.updateFlightSeat);

module.exports = router;
