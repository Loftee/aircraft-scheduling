import React from 'react';
import {shallow} from 'enzyme';
import FlightList from './FlightList';

describe('Flight List', () => {
    const props = {
        flightList:
            [{
                id: "AS1001",
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
    });
});