import styled from "styled-components";
import Days from "./Day/Day";
import MainInfo from "./MainInfo/MainInfo";
import Side from "./Side/Side";
import {connect} from "react-redux";
import {setPlaceThunkCreator} from "./../../STORE/WeatherReducer";
import {useEffect} from "react";



let StyledMain = styled.div`
height: 85%;
display: grid;
grid-template-areas: "m m m s""m m m s""d d d d";
grid-gap: 10px;
width: 100%;
grid-template-columns: 1fr 1fr 1fr 370px;
grid-template-rows: 230px 180px 230px;
@media(max-width: 960px){
 grid-template-areas: "m ""m ""s ""d ""d ";
 grid-template-rows: 170px 130px 200px 100px 100px;
 grid-template-columns: 750px;
}
@media(max-width: 550px){
  grid-template-areas: "m ""m ""s ""d ""d ";
  grid-template-rows: 300px 95px 160px 75px 75px;
  grid-template-columns: 420px;
}
`

function Main(props){
  useEffect(()=>{
    props.setPlace();
  },[]);
  return (
    <StyledMain>
      <MainInfo {...props}/>
      <Side />
      <Days dayTime={props.dayTime}/>
    </StyledMain>
  )
}

function stateToProps(state){
  let place = state.forWeather.currentPlace;
  let weather = state.forWeather.weather;
  return{
    country: place.country,
    city: place.city,
    temperature: weather.temperature,
    humidity: weather.humidity,
    pressure: weather.pressure,
    wind: weather.wind,
    icon: weather.icon,
    isFetching: state.forWeather.isFetching,
  }
}

function dispatchToProps(dispatch){
  return{
    setPlace:function(){
      dispatch(setPlaceThunkCreator());
    }
  }
}


export default connect(stateToProps, dispatchToProps)(Main);
