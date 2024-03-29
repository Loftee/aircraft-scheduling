import React, {Component} from 'react';

import './AircraftList.css';

class AircraftList extends Component {
    render() {
        const {aircraftList, selectAircraft} = this.props;
        return (
            <div className={'aircraft-list-wrapper'}>
                <h2>Select an aircraft</h2>
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
                                        <div>Utilisation: {aircraft.utilisation}</div>
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

export default AircraftList;