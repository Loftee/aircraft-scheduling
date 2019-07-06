## Running the App

In the project directory, you can run:

`npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Assumptions
#### The aircraft could travel from it's `base` to the first destination without a registered flight.
This assumption was made as there were no available flights departing from the same airport as the aircrafts `base`

## Test coverage
I was able to successfully test the API calls in `services.js` using [jest-fetch-mock](https://www.npmjs.com/package/jest-fetch-mock). However, I was unable to mock these services for the tests in `App.test.js`. Therefore, I have uninstalled [jest-fetch-mock](https://www.npmjs.com/package/jest-fetch-mock) and commented out the service tests.

## Compromises
I chose to focus on what I believed to be the core business logic. This was as follows:
1. The app shows a list of all our aircrafts to choose from
1. The app shows a list of all the flights the airline plan to operate that day, their origin, destination, departure time and arrival time.
1. The rotation is the list of flights, in order, an individual aircraft will operate during that day.
1. Flights must be chosen by the user from our list of flights (right sidebar on the wireframe).
1. All aircrafts must be on the ground at midnight.
1. The turnaround time (minimum time between the end of a flight and the beginning of the next one) is always 20min for our airline.
1. Aircrafts cannot "teleport" and cannot move without operating a flight, empty aircrafts cost too much! (With the exception of the above assumption)
1. Utilisation: The app must display for each aircraft its utilisation in percent, i.e. the time the aircraft is on scheduled service per 24 hours (as opposed to sitting idle on the apron costing us money).

Due to the time frame I treated the project more as a proof of concept and ignored styling to a large degree. This also meant I chose to disregard the requirement for the utilisation time line.