import axios from 'axios';

const API_KEY = "ef1134a1c540f74662b2dd9c876f9c2d";
const ROOT_URLS = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// Better to define actions as constants so they are easily edited and passed between actions/reducers
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}