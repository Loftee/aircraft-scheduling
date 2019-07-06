import React, {Component} from 'react';
import './App.css';
import AircraftList from './components/AircraftList';
import FlightList from "./components/FlightList";
import * as constants from './constants';
import * as services from './services';

class App extends Component {
    constructor() {
        super();
        this.state = {
            aircraftList: [],
            flightList: [],
            filteredFlightsList: []
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
        const aircraftListCopy = JSON.parse(JSON.stringify(this.state.aircraftList));
        // Reset the selected aircraft list so multiple aircraft can't be selected at once.
        this.resetSelected(aircraftListCopy);
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

    selectFlight = (id) => {
        // Get the selected flight
        const flightListCopy = JSON.parse(JSON.stringify(this.state.flightList));
        const flightIndex = flightListCopy.findIndex(flight => flight.id === id);

        // Get flights arrival time and airport
        const destinationAirport = flightListCopy[flightIndex].destination;
        const arrivalTime = flightListCopy[flightIndex].arrivalTime + constants.TURN_AROUND_TIME;

        // Filter flights
        const filteredFlightsList = this.filterFlights(destinationAirport, arrivalTime);

        // Set filtered flights
        this.setState(prevState => ({
            ...prevState,
            filteredFlightsList: filteredFlightsList
        }));
    };

    resetSelected = (listCopy) => {
        listCopy.forEach(listItem => {
           listItem.selected = false
        });
    };

    filterFlights = (departAirport, departTime = 0) => {
        const flightListCopy = JSON.parse(JSON.stringify(this.state.flightList));
        const filteredByAirport = flightListCopy.filter(flight => flight.origin === departAirport);
        return filteredByAirport.filter(flight => flight.departureTime > departTime);
    };

    resetFlights = () => {
        this.setState(prevState => ({
            ...prevState,
            filteredFlightsList: this.state.flightList
        }));
    };

    render() {
        return (
            <div className={"app"}>
                <AircraftList {...this.state} selectAircraft={this.selectAircraft} />
                <FlightList {...this.state} selectFlight={this.selectFlight} resetFlights={this.resetFlights} />
            </div>
        );
    }
}

export default App;
