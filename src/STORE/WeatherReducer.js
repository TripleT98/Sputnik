let SET_PLACE = "SET_PLACE";

let initialState = {
  curentPlace:{
    country: "KZ",
    city: "TARAZ",
  },
  weather:{
    temperature: 25,
    humidity: 100,
    pressure: 1018,
    wind: 9
  }
}

function weatherReducer(state=initialState, action){
  switch(action.type){
    case SET_PLACE:{
      return {...state};
    }
    default: return state
  }
}


export default weatherReducer;
