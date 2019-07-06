import React, {Component} from 'react';

import './FlightList.css';

class FlightList extends Component {
    render() {
        const {filteredFlightsList, selectFlight, resetFlights} = this.props;
        return (
            <div className={'flight-list-wrapper'}>
                <div className={"flight-list-reset"}>
                    <button className={'flight-list-reset-button'} onClick={() => {resetFlights()}}>reset</button>
                </div>
                <ul className={'flight-list'}>
                    {
                        filteredFlightsList.map((flight, index) => {
                            return (
                                <li
                                    key={index}
                                    className={'flight-list-item'}
                                    onClick={() => selectFlight(flight.id)}
                                >
                                    <h3 className={'flight-list-item__header'}>Flight: {flight.id}</h3>
                                    <div className={'flight-list-item__data'}>
                                        <span>Departure: {flight.readableDeparture} - {flight.origin}</span>
                                        <span className={'flight-list-item__data-arrow'} />
                                        <span>Arrival: {flight.readableArrival} - {flight.destination}</span>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default FlightList;