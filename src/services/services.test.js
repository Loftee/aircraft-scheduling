// import {fetchAircrafts, fetchFlights} from './services';
//
// describe('services', () => {
//     it('fetch flight data', () => {
//         const mockFlightObject = [{"ident":"AS1001","departuretime":21600,"arrivaltime":26100,"readable_departure":"06:00","readable_arrival":"07:15","origin":"LFSB","destination":"LFMN"}];
//         const mockFlightData = JSON.stringify({ data: mockFlightObject });
//         fetch.mockResponseOnce(mockFlightData);
//
//         fetchFlights().then(res => {
//             expect(res).toEqual(mockFlightObject);
//         })
//     });
//
//     it('fetch aircraft data', () => {
//         const mockAircraftObject = [{id: "GABCD", type: "A320", economySeats: 186, base: "EGKK",}];
//         const mockAircraftData = JSON.stringify({data: mockAircraftObject});
//         fetch.mockResponseOnce(mockAircraftData);
//
//         fetchAircrafts().then(res => {
//             expect(res).toEqual(mockAircraftObject);
//         })
//     });
// });
