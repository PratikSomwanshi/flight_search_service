const { Logger } = require("../config");
const { FlightService } = require("../services");
const { ErrorResponse, SuccessResponse } = require("../utils/common");
const Strings = require("../utils/strings/airplane.string");

async function createFlight(req, res) {
    try {
        const response = await FlightService.createFlight(req.body);
        Logger.info(Strings.CRATED);

        SuccessResponse.message = Strings.CRATED;
        SuccessResponse.data = response;

        return res.json(SuccessResponse);
    } catch (error) {
        Logger.error(`${Strings.FAILED_CREATE} : ${error.message}`);

        ErrorResponse.error = error;

        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function getFlight(req, res) {
    try {
        const response = await FlightService.getFlight(req.params.id);
        Logger.info(Strings.CRATED);

        SuccessResponse.message = Strings.CRATED;
        SuccessResponse.data = response;

        return res.json(SuccessResponse);
    } catch (error) {
        Logger.error(`${Strings.FAILED_CREATE} : ${error.message}`);

        ErrorResponse.error = error;

        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function getAllFlight(req, res) {
    try {
        const response = await FlightService.getAllFlight(req.body.id);
        Logger.info(Strings.CRATED);

        SuccessResponse.message = Strings.CRATED;
        SuccessResponse.data = response;

        return res.json(SuccessResponse);
    } catch (error) {
        Logger.error(`${Strings.FAILED_CREATE} : ${error.message}`);

        ErrorResponse.error = error;

        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function updateFlight(req, res) {
    try {
        const response = await FlightService.updateFlight(
            req.body,
            req.params.id
        );
        Logger.info(Strings.CRATED);

        SuccessResponse.message = "successfully updated the Flight";
        SuccessResponse.data = response;

        return res.json(SuccessResponse);
    } catch (error) {
        Logger.error(`${Strings.FAILED_CREATE} : ${error.message}`);

        ErrorResponse.error = error;

        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function deleteFlight(req, res) {
    try {
        const response = await FlightService.deleteFlight(req.params.id);
        Logger.info(Strings.CRATED);

        SuccessResponse.message = "successfully deleted the Flight";
        SuccessResponse.data = response;

        return res.json(SuccessResponse);
    } catch (error) {
        Logger.error(`${Strings.FAILED_CREATE} : ${error.message}`);

        ErrorResponse.error = error;

        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function updateFlightSeat(req, res) {
    try {
        const response = await FlightService.updateFlightSeats({
            id: req.params.id,
            ...req.body,
        });
        Logger.info(Strings.CRATED);

        SuccessResponse.message = "successfully updated the Flight";
        SuccessResponse.data = response;

        return res.json(SuccessResponse);
    } catch (error) {
        Logger.error(`${Strings.FAILED_CREATE} : ${error.message}`);

        ErrorResponse.error = error;

        return res.status(error.statusCode).json(ErrorResponse);
    }
}

module.exports = {
    createFlight,
    getFlight,
    getAllFlight,
    deleteFlight,
    updateFlight,
    updateFlightSeat,
};
