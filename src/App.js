import React, {Component} from 'react';
import './App.css';
import AircraftList from './components/AircraftList';
import FlightList from "./components/FlightList";
import * as services from './services';

class App extends Component {
    constructor() {
        super();
        this.state = {
            aircraftList: [],
            flightList: []
        };
    }

    componentDidMount() {
        services.fetchAircrafts()
            .then(newAircraft => {
                this.setState(prevState => ({
                    ...prevState,
                    aircraftList: newAircraft
                }));
            });

        services.fetchFlights()
            .then(newFlights => {
                this.setState(prevState => ({
                    ...prevState,
                    flightList: newFlights
                }));
            });
    };

    render() {
        return (
            <div className={"app"}>
                <AircraftList {...this.state} />
                <FlightList {...this.state} />
            </div>
        );
    }
}

export default App;
