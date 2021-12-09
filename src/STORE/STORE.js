import {createStore, combineReducers, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import weatherReducer from "./WeatherReducer"
let reducers = combineReducers({
    forWeather: weatherReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
