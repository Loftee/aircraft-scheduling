import React from 'react';
import {shallow} from 'enzyme';
import FlightList from './FlightList';

describe('Flight List', () => {
    const id = "AS1001";
    const props = {
        filteredFlightsList:
            [{
                id: id,
                departureTime: 21600,
                arrivalTime: 26100,
                readableDeparture: "06:00",
                readableArrival: "07:15",
                origin: "LFSB",
                destination: "LFMN"
            }]
    };

    it('renders correctly', () => {
        const component = shallow(<FlightList {...props} />);
        expect(component).toMatchSnapshot();
    });

    describe('when rendered', () => {
        const component = shallow(<FlightList {...props} />);

        it('returns a list of flights', () => {
            expect(component.find('.flight-list-item').length).toEqual(1);
        });

        describe('and a flight is clicked', () => {
            const mockSelect = jest.fn();
            const component = shallow(<FlightList {...props} selectFlight={mockSelect}/>);
            beforeEach(() => {
                component.find('.flight-list-item').simulate('click');
            });

            it('sends correct id', () => {
                expect(mockSelect).toHaveBeenCalledWith(id);
            });
        });

        describe('and a reset is clicked', () => {
            const mockReset = jest.fn();
            const component = shallow(<FlightList {...props} resetFlights={mockReset}/>);
            beforeEach(() => {
                component.find('.flight-list-reset-button').simulate('click');
            });

            it('sends correct id', () => {
                expect(mockReset).toHaveBeenCalled();
            });
        });
    });
});