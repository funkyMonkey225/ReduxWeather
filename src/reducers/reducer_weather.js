import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action) {
    switch(action.type) {
        case FETCH_WEATHER:
            // concat creates new array that contains old and new data
            // return action.payload.data.concat([state]);
            return[action.payload.data, ...state];
        default:
            return state;
    }
}