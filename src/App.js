import React, {Component} from 'react';
import './App.css';
import AircraftList from './components/AircraftList';
import * as services from './services';

class App extends Component {
    constructor() {
        super();
        this.state = {
            aircraftList: [],
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
    }

    render() {
        return (
            <div className={"app"}>
                <AircraftList {...this.state} />
            </div>
        );
    }
}

export default App;
