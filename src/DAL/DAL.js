import axios from "axios";

let weatherAPI_key = "20dd362259faf4f08b11c3de4bf6f43c";
let weatheAPI_URL = "http://api.openweathermap.org/data/2.5/forecast";

let nasaAPI_key = "KxfOC2gKESmbBdo80zfx4rrwjncAFT4vF7JF0PDZ";
let nasaAPI_URL = "https://api.nasa.gov/planetary/apod";

export function getInfoAboutCity(name){
  return axios.get(weatheAPI_URL,{params:{appid:weatherAPI_key,q:name}}).then(function(data){return data.data},(data)=>{return {cod:404,
  message:"city not found"}});
}

export function getNASA_info(){
  return axios.get(nasaAPI_URL,{params:{api_key:nasaAPI_key}}).then((data)=>{if(data.status === 200){return data.data}else{return {message:"error"}}});
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
   }).then((position)=>{return axios.get(`${weatheAPI_URL}?lat=${position[0]}&lon=${position[1]}&appid=${weatherAPI_key}`)})
}

export function getCityList(word){
  return axios.get("http://localhost:5000/cities/getCities",{params:{word:word}}).then((data)=>{return data.data})
}
