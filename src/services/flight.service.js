const { StatusCodes } = require("http-status-codes");

const { FlightRepository } = require("../repository");
const AppError = require("../utils/error/AppError");

const flightRepository = new FlightRepository();

async function createFlight(data) {
    try {
        const response = await flightRepository.create(data);
        return response;
    } catch (error) {
        // let explanation = [];
        // error.errors.map((item) => {
        //     explanation.push(item.message);
        // });

        console.log(error);

        throw new AppError(error, StatusCodes.BAD_REQUEST);
    }
}

async function getFlight(id) {
    try {
        const response = await flightRepository.get(id);
        return response;
    } catch (error) {
        throw new AppError(error.message, StatusCodes.BAD_REQUEST);
    }
}

async function getAllFlight() {
    try {
        const response = await flightRepository.getAllFlights();
        return response;
    } catch (error) {
        throw new AppError(error.message, StatusCodes.BAD_REQUEST);
    }
}

async function updateFlight(data, id) {
    try {
        const response = await flightRepository.update(data, id);
        return response;
    } catch (error) {
        throw new AppError(error.message, StatusCodes.BAD_REQUEST);
    }
}

async function deleteFlight(id) {
    try {
        const response = await flightRepository.delete(id);
        return response;
    } catch (error) {
        throw new AppError(error.message, StatusCodes.BAD_REQUEST);
    }
}

async function updateFlightSeats(data) {
    try {
        const response = await flightRepository.updateFlightSeats(data);
        return response;
    } catch (error) {
        throw new AppError(error.message, StatusCodes.BAD_REQUEST);
    }
}

module.exports = {
    createFlight,
    getFlight,
    getAllFlight,
    updateFlight,
    deleteFlight,
    updateFlightSeats,
};
