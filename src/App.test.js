import React from 'react';
import {shallow} from "enzyme";
import App from './App';

describe('App', () => {
  const app = shallow(<App/>);

  it('renders correclty', () => {
    expect(app).toMatchSnapshot();
  });

  it('contains a AircraftList component', () => {
    expect(app.find('AircraftList')).toBeTruthy();
  });
}