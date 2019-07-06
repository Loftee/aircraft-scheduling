import React, {Component} from 'react';

import './RotationList.css';

class RotationList extends Component {
    render() {
        const {rotationList} = this.props;
        return (
            <div className={'rotation-list-wrapper'}>
                <h2>Rotation</h2>
                <ul className={'rotation-list'}>
                    {
                        rotationList.map((rotation, index) => {
                            return (
                                <li
                                    key={index}
                                    className={'rotation-list-item'}
                                >
                                    <h3 className={'rotation-list-item__header'}>Flight: {rotation.id}</h3>
                                    <div className={'rotation-list-item__data'}>
                                        <span>Departure: {rotation.readableDeparture} - {rotation.origin}</span>
                                        <span className={'rotation-list-item__data-arrow'}/>
                                        <span>Arrival: {rotation.readableArrival} - {rotation.destination}</span>
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

export default RotationList;