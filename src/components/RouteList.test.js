import React from 'react';
import {shallow} from 'enzyme';
import RouteList from './RouteList';

describe('Route List', () => {
    const props = {
        routeList:
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
    const component = shallow(<RouteList {...props} />);

    it('renders correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('displays selected routes', () => {
       expect(component.find('.route-list-item').length).toBe(1);
    });
});