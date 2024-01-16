const router = require("express").Router();

const airplaneRoute = require("./airplane.route");
const airportRoute = require("./airport.route");
const flightRoute = require("./flight.route");

router.use("/airplanes", airplaneRoute);

router.use("/airports", airportRoute);

router.use("/flights", flightRoute);

module.exports = router;
