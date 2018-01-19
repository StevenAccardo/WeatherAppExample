import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../Components/google_map';


class WeatherList extends Component {
  //for each object that is passed in, it renders a column with the cities name.
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);

    //Using es6 to destructure the object to get access to the values of lon and lat keys, and assign them to the constants lon and lat. Equivelent to below:

    //const lon = cityData.city.coord.lon;
    //const lat = cityData.city.coord.lat;
    const { lon,lat } = cityData.city.coord;

    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat}/></td>
        <td><Chart data={temps} color="blue" units="K"/></td>
        <td><Chart data={pressures} color="green" units="hPa"/></td>
        <td><Chart data={humidities} color="red" units="%"/></td>
      </tr>
    );
  };


  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {/*cycles through each object stored on the array and calls this.renderWeather on it*/}
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  };
};

//used es6 to access the weather key instead of writing state.weather
//Only need to use when this container needs access to the application state, i.e. if it needs to read the updated state.
function mapStateToProps({ weather }) {
  //We are using the value state.weather because we defined the key for our WeatherReducer as weather on the reducer/index.js file.
  //Using es6 again to access the value weather on the key weather instead of writing "return { weather: weather }"
  return { weather }; //{ weather } === { weather: weather }
}

export default connect(mapStateToProps)(WeatherList)
