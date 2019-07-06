import React from 'react';
import {shallow} from 'enzyme';
import RotationList from './RotationList';

describe('Rotation List', () => {
    const props = {
        rotationList:
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
    const component = shallow(<RotationList {...props} />);

    it('renders correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('displays selected rotations', () => {
       expect(component.find('.rotation-list-item').length).toBe(1);
    });
});