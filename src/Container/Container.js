import styled,{css, keyframes} from "styled-components";
import Main from "./Main/Main";
import Header from "./Header/Header";
import {connect} from "react-redux";
import {useState, useEffect} from "react";

let fadeIn = keyframes`
0%{
  opacity: 1;
}
100%{
  opacity: 0;
}
`
let fadeOut = keyframes`
0%{
  opacity: 0;
}
100%{
  opacity: 1;
}
`

let StyledContainer = styled.div`
  opacity: 0;
  height: 800px;
  ${props=>{
    switch (props.fadeStatus) {
      case "fadeIn":
        return css`animation: ${fadeIn} .5s linear forwards`;
      case "fadeOut":
        return css`animation: ${fadeOut} .5s linear forwards`;
      default: return ""

    }
  }};
  @media(max-width: 960px){
    max-width: 750px;
    min-width: 750px;
  }
`
function Container(props){
  useEffect(()=>{
    fade("fadeOut");
  },[props.fadeToggle]);
  let [fadeStatus, fade] = useState("");
  return (
    <StyledContainer fadeStatus={fadeStatus}>
       <Header dayTime={props.dayTime} fade={fade} fadeStatus={fadeStatus}/>
       <Main dayTime={props.dayTime}/>
    </StyledContainer>
  )
}

function stateToProps(state){
  return{
    icon: state.forWeather.weather.icon,
    fadeToggle: state.forWeather.fadeToggle
  }
}


export default connect(stateToProps)(Container);
