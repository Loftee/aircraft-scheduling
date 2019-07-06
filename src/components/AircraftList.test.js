import React from 'react';
import {shallow} from 'enzyme';
import AircraftList from './AircraftList';

describe('Aircraft list', () => {
    it('renders correctly', () => {
        const props = {aircraftList: []};
        const component = shallow(<AircraftList {...props} />);
        expect(component).toMatchSnapshot();
    });

    describe('when rendered', () => {
        const props = {
            aircraftList:
                [{
                    "ident": "GABCD",
                    "type": "A320",
                    "economySeats": 186,
                    "base": "EGKK"
                }, {
                    "ident": "STUVW",
                    "type": "A320",
                    "economySeats": 150,
                    "base": "LFSB"
                }]
        };
        const component = shallow(<AircraftList {...props} />);

        it('fetches and renders an aircraft list', () => {
            expect(component.find('.aircraft-list-item').length).toEqual(2);
        });
    });
});