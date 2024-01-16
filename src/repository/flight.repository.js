const CrudRepository = require("./crud.repository");
const { Flight, Airplane, Airport, sequelize, City } = require("../models");
const db = require("../models");
const { addRowLockOnFlight } = require("./queries");

class FlightRepository extends CrudRepository {
    constructor() {
        super(Flight);
    }

    async getAllFlights() {
        const response = await Flight.findAll({
            include: [
                {
                    model: Airplane,
                    required: true,
                    as: "airplane",
                },
                {
                    model: Airport,
                    as: "departureAirport",
                    on: {
                        col1: sequelize.where(
                            sequelize.col("Flight.departureAirportId"),
                            "=",
                            sequelize.col("departureAirport.code")
                        ),
                    },
                    include: {
                        model: City,
                    },
                },
                {
                    model: Airport,
                    as: "arrivalAirport",
                    on: {
                        col1: sequelize.where(
                            sequelize.col("Flight.arrivalAirportId"),
                            "=",
                            sequelize.col("arrivalAirport.code")
                        ),
                    },
                    include: {
                        model: City,
                    },
                },
            ],
        });
        return response;
    }

    async updateFlightSeats(data) {
        const transaction = await db.sequelize.transaction();
        await db.sequelize.query(addRowLockOnFlight(data.id));
        try {
            const flight = await Flight.findByPk(data.id);
            console.log(data);

            if (data.dec == "1") {
                await flight.decrement(
                    "totalSeats",
                    {
                        by: data.seats,
                        plain: true,
                    },
                    {
                        transaction: transaction,
                    }
                );
            } else {
                await flight.increment(
                    "totalSeats",
                    {
                        by: data.seats,
                        plain: true,
                    },
                    {
                        transaction: transaction,
                    }
                );
            }

            await transaction.commit();
            return flight;
        } catch (error) {
            await transaction.rollback();
            throw error;
        }
    }
}

module.exports = FlightRepository;
