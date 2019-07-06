import React, {Component} from 'react';

import './FlightList.css';

class FlightList extends Component {
    render() {
        const {flightList} = this.props;
        return (
            <ul className={'flight-list'}>
                {
                    flightList.map((flight, index) => {
                        return (
                            <li key={index} className={'flight-list-item'}>
                                <h3 className={'flight-list-item__header'}>Flight: {flight.id}</h3>
                                <div className={'flight-list-item__data'}>
                                    <span>Departure: {flight.readableDeparture} - {flight.origin}</span>
                                    <span>Arrival: {flight.readableArrival} - {flight.destination}</span>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

export default FlightList;