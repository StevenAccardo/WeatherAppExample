
//npm installed axios library for http requests
import axios from 'axios';
//API Key for openweathermap.org
const API_KEY = 'e0b458abba24e1265fb530d7c90e884b';
const Root_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

//Make the action.type a variable in order to prevent bugs or errors down the line, as the type is used by reducers. Also export it so it can be imported by reducers as well.
export const FETCH_WEATHER = 'FETCH_WEATHER';

//every time this action creator is called, it will have a city name as an argument
//action creator
export function fetchWeather(city) {
  const url = `${Root_URL}&q=${city},us`;
  //using axios to may a GET request and providing the url above
  //this GET request returns a promise that is stored in the request constant.
  //A promise doesn't actually contain any of our data
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
