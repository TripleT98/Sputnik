import axios from "axios";

let weatherAPI = "20dd362259faf4f08b11c3de4bf6f43c";

export function getInfoAboutCity(name){
  return axios.get("http://api.openweathermap.org/data/2.5/forecast",{params:{appid:weatherAPI,q:name}}).then(function(data){return data.data},(data)=>{return {cod:404,
  message:"city not found"}});
}

export function getMinePosition(){
return new Promise((res,rej)=>{
      navigator.geolocation.getCurrentPosition(success, error, {enableHighAccuracy: true});
      function success({ coords }) {
        const { latitude, longitude } = coords
        let position = [latitude, longitude];
        res(position);
     }
      function error({ message }){
  console.log(message);
      }
   }).then((position)=>{return axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${position[0]}&lon=${position[1]}&appid=${weatherAPI}`)})
}

export function getCityList(word){
  return axios.get("http://localhost:5000/cities/getCities",{params:{word:word}}).then((data)=>{return data.data})
}
