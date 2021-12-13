import styled from "styled-components";
import Main from "./Main/Main";
import Header from "./Header/Header";
import {connect} from "react-redux";
import {wallpaper} from "./../Images/Images";

let StyledBackground = styled.img`
position: absolute;
top: 0px;
left: 0px;
`

let StyledContainer = styled.div`
  min-width: 1500px;
  max-width: 1500px;
  height: 800px;
`
function Container(props){
  let hours = new Date().getHours();
  let dayTime = hours >= 18 || hours <= 4?"night":"day";
  return (
    <StyledContainer>
       <StyledBackground src={wallpaper[props.icon]?.[dayTime] || "https://phonoteka.org/uploads/posts/2021-06/1624879195_9-phonoteka_org-p-kapli-dozhdya-na-stekle-oboi-krasivo-12.jpg"}/>
       <Header dayTime={dayTime}/>
       <Main dayTime={dayTime}/>
    </StyledContainer>
  )
}

function stateToProps(state){
  return{
    icon: state.forWeather.weather.icon,
  }
}


export default connect(stateToProps)(Container);
