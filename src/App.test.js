import React from 'react';
import {mount, shallow} from "enzyme";
import App from './App';

describe('App', () => {
    const app = shallow(<App/>);

    it('renders correctly', () => {
        expect(app).toMatchSnapshot();
    });

    it('contains an AircraftList component', () => {
        expect(app.find('AircraftList').exists()).toBe(true);
    });

    it('contains a FlightList component', () => {
        expect(app.find('FlightList').exists()).toBe(true);
    });

    it('contains a RotationList component', () => {
        expect(app.find('RotationList').exists()).toBe(true);
    });

    describe('when an aircraft is clicked', () => {
        const mountedApp = mount(<App/>);
        const aircraftId = "GABCD";
        mountedApp.setState({
            aircraftList: [{id: aircraftId, type: "A320", economySeats: 186, base: "EGKK", selected: false, utilisation: 0}],
            flightList: [{
                id: "AS1001",
                departureTime: 21600,
                arrivalTime: 26100,
                readableDeparture: "06:00",
                readableArrival: "07:15",
                origin: "LFSB",
                destination: "LFMN"
            }],
            filteredFlightsList: []
        });

        beforeEach(() => {
            mountedApp.instance().selectAircraft(aircraftId);
        });

        it('shows available flights', () => {
            expect(mountedApp.state().aircraftList).toEqual([{
                id: aircraftId,
                type: "A320",
                economySeats: 186,
                base: "EGKK",
                selected: true,
                utilisation: 0
            }]);
        });
    });

    describe('when a flight is clicked', () => {
        const mountedApp = mount(<App/>);
        const flightId = "AS1001";
        mountedApp.setState({
            aircraftList: [{id: "GABCD", type: "A320", economySeats: 186, base: "EGKK", selected: true, utilisation: 0}],
            flightList: [{
                id: flightId,
                departureTime: 21600,
                arrivalTime: 26100,
                readableDeparture: "06:00",
                readableArrival: "07:15",
                origin: "LFSB",
                destination: "LFMN"
            }],
            filteredFlightsList: [{
                id: flightId,
                departureTime: 21600,
                arrivalTime: 26100,
                readableDeparture: "06:00",
                readableArrival: "07:15",
                origin: "LFSB",
                destination: "LFMN"
            }],
            rotationList: []
        });

        beforeEach(() => {
            mountedApp.instance().selectFlight(flightId);
        });

        it('adds the flight to rotation', () => {
            expect(mountedApp.state().rotationList).toEqual([{
                id: flightId,
                departureTime: 21600,
                arrivalTime: 26100,
                readableDeparture: "06:00",
                readableArrival: "07:15",
                origin: "LFSB",
                destination: "LFMN"
            }]);
        });
    });

    describe('when reset button is clicked', () => {
        const mountedApp = mount(<App/>);
        mountedApp.setState({
            aircraftList: [{id: "GABCD", type: "A320", economySeats: 186, base: "EGKK", selected: true, utilisation: 0}],
            flightList: [{
                id: "AS1001",
                departureTime: 21600,
                arrivalTime: 26100,
                readableDeparture: "06:00",
                readableArrival: "07:15",
                origin: "LFSB",
                destination: "LFMN"
            }],
            filteredFlightsList: [{
                id: "AS1001",
                departureTime: 21600,
                arrivalTime: 26100,
                readableDeparture: "06:00",
                readableArrival: "07:15",
                origin: "LFSB",
                destination: "LFMN"
            }],
            rotationList: [{
                id: "AS1001",
                departureTime: 21600,
                arrivalTime: 26100,
                readableDeparture: "06:00",
                readableArrival: "07:15",
                origin: "LFSB",
                destination: "LFMN"
            }]
        });

        it('calls the reset function', () => {
            const spy = jest.spyOn(mountedApp.instance(), 'reset');
            mountedApp.find('.reset-button').simulate('click');
            expect(spy).toHaveBeenCalled();
        });

        it('resets the data', () => {
            mountedApp.instance().reset();
            expect(mountedApp.state().aircraftList).toEqual([{
                id: "GABCD",
                type: "A320",
                economySeats: 186,
                base: "EGKK",
                selected: false,
                utilisation: 0
            }]);
            expect(mountedApp.state().flightList).toEqual([{
                id: "AS1001",
                departureTime: 21600,
                arrivalTime: 26100,
                readableDeparture: "06:00",
                readableArrival: "07:15",
                origin: "LFSB",
                destination: "LFMN"
            }]);
            expect(mountedApp.state().filteredFlightsList).toEqual([]);
            expect(mountedApp.state().rotationList).toEqual([]);
        });
    });
})
;