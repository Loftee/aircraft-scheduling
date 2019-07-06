import React, {Component} from 'react';

import './RouteList.css';

class RouteList extends Component {
    render() {
        const {routeList} = this.props;
        // console.log(this.props);
        return (
            <div className={'route-list-wrapper'}>
                <h2>Routes</h2>
                <ul className={'route-list'}>
                    {
                        routeList.map((route, index) => {
                            return (
                                <li
                                    key={index}
                                    className={'route-list-item'}
                                >
                                    <h3 className={'route-list-item__header'}>Flight: {route.id}</h3>
                                    <div className={'route-list-item__data'}>
                                        <span>Departure: {route.readableDeparture} - {route.origin}</span>
                                        <span className={'route-list-item__data-arrow'}/>
                                        <span>Arrival: {route.readableArrival} - {route.destination}</span>
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

export default RouteList;