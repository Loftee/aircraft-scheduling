import React, {Component} from 'react';

import './AircraftList.css';

class AircraftList extends Component {
    render() {
        const {aircraftList, selectAircraft} = this.props;
        return (
            <ul className={'aircraft-list'}>
                {
                    aircraftList.map((aircraft, index) => {
                        return (
                            <li
                                key={index}
                                className={aircraft.selected === true ? 'aircraft-list-item aircraft-list-item--selected' : 'aircraft-list-item'}
                                onClick={() => selectAircraft(aircraft.id)}
                            >
                                <h3 className={'aircraft-list-item__header'}>Aircraft Id: {aircraft.id}</h3>
                                <div className={'aircraft-list-item__data'}>
                                    <div>Aircraft type: {aircraft.type}</div>
                                    <div>Aircraft economy seats available: {aircraft.economySeats}</div>
                                    <div>Aircraft base: {aircraft.base}</div>
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