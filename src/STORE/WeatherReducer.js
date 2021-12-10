import {getMinePosition,getInfoAboutCity} from "./../DAL/DAL";

let SET_PLACE = "SET_PLACE";
let SET_ERR = "SET_ERR";

let initialState = {
  currentPlace:{
    country: "KZ",
    city: "TARAZ",
  },
  weather:{
    temperature: 25,
    humidity: 100,
    pressure: 1018,
    wind: 9
  },
  days:[]
}

class Day{
  constructor(temp, hum, press, wind, date, day,icon){
    this.temp = temp + " °C";
    this.hum = hum + " %";
    this.press = press + " Mb";
    this.wind = wind + "km/h";
    this.date = date.split(" ")[0].split("-").slice(1).reverse().join(".");
    this.day = day;
    this.icon = icon.slice(0,2);
  }
}
class Days{
  days = ["Monday","Thuesday","Wednsday","Thursday","Friday","Saturday","Sunday"];

  constructor(){
  }
  getDays(arr){
    let days = [];
    let today = new Date();
    today = 1 + today.getDay();
    for(let i = 8; i < arr.length; i+=8){
      if(today > 7){
        today = 1;
      }
      days.push(new Day((Number(arr[i].main.temp) - 273).toFixed(0),arr[i].main.temp.humidity,arr[i].main.temp.pressure,arr[i].wind.speed.toFixed(0),arr[i].dt_txt, this.days[today - 1],arr[i].weather[0].icon));
      today++;
    }
    return days;
  }
}

function weatherReducer(state=initialState, action){
  switch(action.type){
    case SET_PLACE:{
      let newDays = new Days().getDays(action.data.list);
      let newState = {
        currentPlace:{
          country:action.data.city.country,
          city:action.data.city.name,
        },
        weather:{
          temperature: (Number(action.data.list[0].main.temp) - 273).toFixed(),
          humidity: action.data.list[0].main.temp.humidity,
          pressure: action.data.list[0].main.temp.pressure,
          wind: action.data.list[0].wind.speed.toFixed(),
          icon: action.data.list[0].weather[0].icon.slice(0,2),
        },
       days: newDays
      }
      return newState;
    }
    default: return state
  }
}

function setPlaceAC(data){
  return {
    type: SET_PLACE,
    data: data,
  }
}

function setErrAC(){
  return {
    type: SET_ERR,
  }
}

export function setPlaceThunkCreator(place){
  return function(dispatch){
     if(place){
       getInfoAboutCity(place).then((data)=>{dispatch(setPlaceAC(data));console.log(data.code)}, (err)=>{setErrAC()});
       return true;
     }
     try{
     getMinePosition().then((data)=>{dispatch(setPlaceAC(data.data))}, (err)=>{setErrAC()});
   }catch(err){
     alert(err.message);
   }
     return true;
   }
}

export default weatherReducer;
