const { Logger } = require("../config");
const { AirportService } = require("../services");
const { ErrorResponse, SuccessResponse } = require("../utils/common");
const Strings = require("../utils/strings/airplane.string");

async function createAirport(req, res) {
    try {
        const response = await AirportService.createAirport(
            req.params.id,
            req.body
        );
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

async function getAirport(req, res) {
    try {
        const response = await AirportService.getAirport(req.params.id);
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

async function getAllAirport(req, res) {
    try {
        const response = await AirportService.getAllAirport(req.body.id);
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

async function updateAirport(req, res) {
    try {
        const response = await AirportService.updateAirport(
            req.body,
            req.params.id
        );
        Logger.info(Strings.CRATED);

        SuccessResponse.message = "successfully updated the Airport";
        SuccessResponse.data = response;

        return res.json(SuccessResponse);
    } catch (error) {
        Logger.error(`${Strings.FAILED_CREATE} : ${error.message}`);

        ErrorResponse.error = error;

        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function deleteAirport(req, res) {
    try {
        const response = await AirportService.deleteAirport(req.params.id);
        Logger.info(Strings.CRATED);

        SuccessResponse.message = "successfully deleted the Airport";
        SuccessResponse.data = response;

        return res.json(SuccessResponse);
    } catch (error) {
        Logger.error(`${Strings.FAILED_CREATE} : ${error.message}`);

        ErrorResponse.error = error;

        return res.status(error.statusCode).json(ErrorResponse);
    }
}

module.exports = {
    createAirport,
    getAirport,
    getAllAirport,
    deleteAirport,
    updateAirport,
};
