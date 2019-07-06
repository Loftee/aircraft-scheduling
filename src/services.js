import * as constants from './constants';

export const fetchAircrafts = () => {
    return fetch(constants.AIRCRAFT_API)
        .then(res => res.json())
        .then(jsonData => {
            return jsonData.data.map(aircraft => ({
                id: aircraft.ident,
                type: aircraft.type,
                economySeats: aircraft.economySeats,
                base: aircraft.base
            }));
        })
        .catch(error => console.log('Error fetching aircraft: ' + error));
};