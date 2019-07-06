import React from 'react';
import {shallow} from 'enzyme';
import AircraftList from './AircraftList';

describe('Aircraft list', () => {
    const id = "GABCD";
    const props = {
        aircraftList:
            [{
                "id": id,
                "type": "A320",
                "economySeats": 186,
                "base": "EGKK"
            }]
    };

    it('renders correctly', () => {
        const component = shallow(<AircraftList {...props} />);
        expect(component).toMatchSnapshot();
    });

    describe('when rendered', () => {
        const component = shallow(<AircraftList {...props} />);

        it('fetches and renders an aircraft list', () => {
            expect(component.find('.aircraft-list-item').length).toEqual(1);
        });

        describe('and a aircraft is clicked', () => {
            const mockSelect = jest.fn();
            const component = shallow(<AircraftList {...props} selectAircraft={mockSelect}/>);
            beforeEach(() => {
                component.find('.aircraft-list-item').simulate('click');
            });

            it('sends correct id', () => {
                expect(mockSelect).toHaveBeenCalledWith(id);
            });
        });
    });
});