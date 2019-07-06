import React from 'react';
import {shallow} from "enzyme";
import App from './App';

describe('App', () => {
  const app = shallow(<App />);

  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  });

  it('contains an AircraftList component', () => {
    expect(app.find('AircraftList')).toBeTruthy();
  });

  it('contains a FlightList component', () => {
    expect(app.find('FlightList')).toBeTruthy();
  });

  it('contains a RouteList component', () => {
    expect(app.find('RouteList')).toBeTruthy();

  });
});