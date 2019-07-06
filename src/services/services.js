import * as constants from '../constants';

export const fetchAircrafts = () => {
    return fetch(constants.AIRCRAFT_API)
        .then(res => res.json())
        .then(jsonData => {
            return jsonData.data.map(aircraft => ({
                id: aircraft.ident,
                type: aircraft.type,
                economySeats: aircraft.economySeats,
                base: aircraft.base,
                selected: false
            }));
        })
        .catch(error => console.log('Error fetching aircraft: ' + error));
};

export const fetchFlights = () => {
    return fetch(constants.FLIGHT_API)
        .then(res => res.json())
        .then(jsonData => {
            return jsonData.data.map(flights => ({
                id: flights.id,
                departureTime: flights.departuretime,
                arrivalTime: flights.arrivaltime,
                readableDeparture: flights.readable_departure,
                readableArrival: flights.readable_arrival,
                origin: flights.origin,
                destination: flights.destination
            }));
        })
        .catch(error => console.log('Error fetching flights: ' + error));
};