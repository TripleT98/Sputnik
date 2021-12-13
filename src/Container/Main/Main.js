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
grid-template-areas: "m m m s"
                     "m m m s"
                     "d d d d";
grid-gap: 10px;
width: 100%;
`
function Main(props){
  useEffect(()=>{
    props.setPlace();
  },[])
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
    icon: weather.icon
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
