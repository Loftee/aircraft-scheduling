import React, {Component} from 'react';
import './App.css';
import AircraftList from './components/AircraftList';
import FlightList from "./components/FlightList";
import RotationList from './components/RotationList';
import * as constants from './constants';
import * as services from './services/services';

class App extends Component {
    constructor() {
        super();
        this.state = {
            aircraftList: [],
            flightList: [],
            filteredFlightsList: [],
            rotationList: []
        };
    }

    componentDidMount() {
        services.fetchAircrafts()
            .then(fetchedAircraft => {
                this.setState(prevState => ({
                    ...prevState,
                    aircraftList: fetchedAircraft
                }));
            });

        services.fetchFlights()
            .then(fetchedFlights => {
                this.setState(prevState => ({
                    ...prevState,
                    flightList: fetchedFlights
                }));
            });
    }

    selectAircraft = id => {
        // Reset the selected aircraft list so multiple aircraft can't be selected at once.
        const aircraftListCopy = this.resetSelectedAircraft();
        const aircraftIndex = aircraftListCopy.findIndex(aircraft => aircraft.id === id);

        aircraftListCopy[aircraftIndex].selected = true;

        // Was going to have the flights filter when an aircraft was selected but
        // no flights match the aircraft's base.
        // const aircraftBase = aircraftListCopy[aircraftIndex].base;
        // this.filterFlights(aircraftBase, initialTime);

        // Set newly selected aircraft and reset flight list
        this.setState(prevState => ({
            ...prevState,
            aircraftList: aircraftListCopy,
            filteredFlightsList: this.state.flightList
        }));
    };

    selectFlight = id => {
        // Get the selected flight
        const flightListCopy = JSON.parse(JSON.stringify(this.state.flightList));
        const flightIndex = flightListCopy.findIndex(flight => flight.id === id);
        const selectedFlight = flightListCopy[flightIndex];

        // Get flights arrival time and airport
        const destinationAirport = selectedFlight.destination;
        const arrivalTime = selectedFlight.arrivalTime + constants.TURN_AROUND_TIME;

        // Filter flights
        const filteredFlightsList = this.filterFlights(destinationAirport, arrivalTime);

        // Add selected rotation to rotation list
        const rotationListCopy = JSON.parse(JSON.stringify(this.state.rotationList));
        rotationListCopy.push(selectedFlight);

        // Set filtered flights and rotation lists
        this.setState(prevState => ({
            ...prevState,
            filteredFlightsList: filteredFlightsList,
            rotationList: rotationListCopy
        }));
    };

    resetSelectedAircraft = () => {
        const aircraftListCopy = JSON.parse(JSON.stringify(this.state.aircraftList));
        aircraftListCopy.forEach(aircraft => {
           aircraft.selected = false
        });
        return aircraftListCopy
    };

    filterFlights = (departAirport, departTime = 0) => {
        const flightListCopy = JSON.parse(JSON.stringify(this.state.flightList));
        const filteredByAirport = flightListCopy.filter(flight => flight.origin === departAirport);
        return filteredByAirport.filter(flight => flight.departureTime > departTime);
    };

    reset = () => {
        const aircraftListCopy = this.resetSelectedAircraft();
        this.setState(prevState => ({
            ...prevState,
            aircraftList: aircraftListCopy,
            filteredFlightsList: [],
            rotationList: []
        }));
    };

    render() {
        return (
            <div className={"app"}>
                <div className={"reset"}>
                    <button className={'reset-button'} onClick={() => {this.reset()}}>Reset</button>
                </div>
                <AircraftList aircraftList={this.state.aircraftList} selectAircraft={this.selectAircraft} />
                <FlightList filteredFlightsList={this.state.filteredFlightsList} selectFlight={this.selectFlight} />
                <RotationList rotationList={this.state.rotationList} />
            </div>
        );
    }
}

export default App;
