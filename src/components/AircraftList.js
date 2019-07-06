import React, {Component} from 'react';

import './AircraftList.css';

class AircraftList extends Component {
    render() {
        const {aircraftList} = this.props;
        return (
            <ul className={'aircraft-list'}>
                {
                    aircraftList.map((aircraft, index) => {
                        return (
                            <li key={index} className={'aircraft-list-item'}>
                                <h3 className={'aircraft-list-item__header'}>Aircraft Id: {aircraft.id}</h3>
                                <div className={'aircraft-list-item__data'}>
                                    <span>Aircraft type: {aircraft.type}</span>
                                    <span>Aircraft economy seats available: {aircraft.economySeats}</span>
                                    <span>Aircraft base: {aircraft.base}</span>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

export default AircraftList;