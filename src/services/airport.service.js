const { StatusCodes } = require("http-status-codes");

const { AirportRepository } = require("../repository");
const AppError = require("../utils/error/AppError");
const { City } = require("../models");

const airportRepository = new AirportRepository();

async function createAirport(id, data) {
    try {
        const city = await City.findByPk(id);
        const response = await city.createAirport(data);
        return response;
    } catch (error) {
        throw new AppError(error.message, StatusCodes.BAD_REQUEST);
    }
}

async function getAirport(id) {
    try {
        const response = await airportRepository.get(id);
        return response;
    } catch (error) {
        throw new AppError(error.message, StatusCodes.BAD_REQUEST);
    }
}

async function getAllAirport() {
    try {
        const response = await airportRepository.getAll();
        return response;
    } catch (error) {
        throw new AppError(error.message, StatusCodes.BAD_REQUEST);
    }
}

async function updateAirport(data, id) {
    try {
        const response = await airportRepository.update(data, id);
        return response;
    } catch (error) {
        throw new AppError(error.message, StatusCodes.BAD_REQUEST);
    }
}

async function deleteAirport(id) {
    try {
        const response = await airportRepository.delete(id);
        return response;
    } catch (error) {
        throw new AppError(error.message, StatusCodes.BAD_REQUEST);
    }
}

module.exports = {
    createAirport,
    getAirport,
    getAllAirport,
    updateAirport,
    deleteAirport,
};
