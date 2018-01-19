import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
  //Whatever keys are used here will showup in the containers in the application state object, i.e. state.weather to access that reducer.
  weather: WeatherReducer
  //state: (state = {}) => state
});

export default rootReducer;
