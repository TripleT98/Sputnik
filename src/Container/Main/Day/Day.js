import styled from "styled-components";
import images from "./../../../Images/Images.js";
import {connect} from "react-redux";

let StyledDays = styled.div`
grid-area: d;
display: flex;
justify-content: space-between;
@media(max-width: 550px){
  flex-wrap: wrap;
}
`

let StyledDay = styled.div`
border: ${props=>props.dayTime === "day"?"rgb(36, 36, 36)":"white"} solid 10px;
color: white;
font-weight: 520;
font-size: 30px;
display: grid;
height: 100%;
width: 24%;
grid-template-areas: "i i t" "i i t" "n n n";
grid-template-columns: 2.7fr 0.9fr 0.9fr;
box-shadow: 0 0 1rem 0 rgba(41, 39, 39, 0.2);
border-radius: 3px;
position: relative;
z-index: 1;
background: inherit;
overflow: hidden;
color:${props => props.dayTime === "day" && "black"};
@media(max-width: 550px){
 border: 3px solid;
 font-size: 15px;
 height: 48%;
 width: 49%;
 grid-template-areas: "i t" "i n";
}
&:before{
content: "";
position: absolute;
background: inherit;
z-index: -1;
top: 0;
left: 0;
right: 0;
bottom: 0;
box-shadow: inset 0 0 2000px rgb(93, 93, 93);
filter: blur(1px);
}
`

let StyledIconPlace = styled.div`
grid-area: i;
width: 100%;
height: 100%;
filter: grayscale(1);
filter: ${props=>props.dayTime === "day" && "invert(100%)"};
position:relative;
overflow: hidden;
`

let StyledIcon = styled.img`
position: absolute;
top: 10px;
left: 10px;
width: 100px;
height: auto;
overflow: visible;
@media(max-width: 550px){
 width: 50px;
 height: auto;
 margin-left: 15px;
}
`

let StyledTemp = styled.div`
grid-area: t;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
font-weight: 700;
overflow: visible;
`

let StyledName = styled.div`
grid-area: n;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-weight: 700;
overflow: visible;
`

function Day(props){
  return (
    <StyledDay dayTime={props.dayTime}>
     <StyledIconPlace dayTime={props.dayTime}><StyledIcon src={images[props.icon]}/></StyledIconPlace>
     <StyledTemp>{props.temp}</StyledTemp>
     <StyledName><p>{props.date}</p><p>{props.day}</p></StyledName>
    </StyledDay>
  )
}

function Days(props){
  let arr = [];
  for(let i = 0; i < props.days.length; i++){
    arr.push(<Day key={i} temp={props.days[i].temp} date={props.days[i].date} day={props.days[i].day} icon={props.days[i].icon} dayTime={props.dayTime}/>)
  }
  return(
    <StyledDays>
      {arr}
    </StyledDays>
  )
}

function stateToProps(state){
  return{
    days: state.forWeather.days,
  }
}

function dispatchToProps(dispatch){
  return{

  }
}

export default connect(stateToProps, dispatchToProps)(Days);
