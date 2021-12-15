import styled,{css, keyframes} from "styled-components";
import {useState, useEffect} from "react";
import images from "./../../../Images/Images";


let fadeAnim = keyframes`
0%{
  opacity: 1;
}
99%{
  display: block;
}
100%{
  opacity: 0;
  display: none;
}
`;
let gridAnim1 = keyframes`
0%{
  grid-template-columns: .75fr 1fr .75fr;
}
99%{
  grid-template-columns: .75fr 1fr .75fr;
}
100%{
  grid-template-columns: 1fr 0px 1fr;
}
`;
let gridAnim2 = keyframes`
0%{
  grid-template-columns: 1fr 0px 1fr;
}
99%{
  grid-template-columns: 1fr 0px 1fr;
}
100%{
  grid-template-columns: 1fr 0px 0px;
}
`;
let dur = ".3s";

let StyledMainInfo = styled.div`
grid-area: m;
display: grid;
grid-template-areas: "st st sc"
                     "st st sc"
                     "sn sn si";
grid-gap: 10px;
background-color: transparent;
font-family: monospace;
font-size: 50px;
text-align: center;
color: ${props => props.dayTime === "night"?"rgb(235, 235, 235)":"black"};
@media(max-width: 550px){
  grid-template-areas: "st" "sn" "si" "sc";
  grid-template-rows: 1fr 1fr 1fr 1fr;
}
`
// ${props=>css`animation: ${gridAnim1} ${dur} forwards linear;`}
export let StyledTemperature = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  font-size: 100px;
  grid-area: st;
  box-shadow: 0 0 1rem 0 rgba(41, 39, 39, 0.2);
  border-radius: 3px;
  position: relative;
  z-index: 1;
  background: inherit;
  overflow: hidden;
  ${props=>props.isTemp && css`
   display: grid;
   grid-template-areas: "temperature humidity wind";
   grid-template-columns: .75fr 1fr .75fr;
   transition-duration: ${dur};
   @media(max-width: 1300px){
     ${props=>css`animation: ${gridAnim1} ${dur} forwards linear;`}
   }
   @media(max-width: 1200px){
     ${props=>css`animation: ${gridAnim2} ${dur} forwards linear;`}
   }

    `}

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

let StyledName = styled(StyledTemperature)`
flex-direction: column;
font-size: 50px;
grid-area: sn;
@media(max-width: 550px){
 font-size: 30px;
}
`

let StyledTime = styled(StyledTemperature)`
font-size: 50px;
grid-area: si;
min-width: 120px;
@media(max-width: 550px){
 font-size: 30px;
}
`

let StyledIcon = styled(StyledTemperature)`
grid-area: sc;
min-width: 120px;
`

let StyledImage = styled.img`
width: 150px;
height: auto;
filter: grayscale(1);
filter: ${props=>props.dayTime === "day" && "invert(100%)"};
margin: 0px 10px 0px 10px;
@media(max-width: 550px){
 width: 70px;
}
`

let StyledParam = styled.div`
font-size: 40px;
grid-area: ${props=>props.param};
display: flex;
flex-direction: column;
justify-content: center;
margin: 10px;
transition-duration: ${dur};
@media(max-width: 1300px){
  transition-duration: ${dur};
  ${props=>props.param === "humidity" && css`animation:${fadeAnim} ${dur} forwards linear; margin: 0px;`};
}
@media(max-width: 1200px){
  transition-duration: ${dur};
  ${props=>props.param === "wind" && css`animation:${fadeAnim} ${dur} forwards linear; margin: 0px;`};
}
@media(max-width: 960px){
  ${props=>props.expand && css`font-size: ${props.expand}px`};
}
@media(max-width: 550px){
  font-size: 30px;
}
`

function MainInfo(props){
  let [time, setTime] = useState(new Date());
  useEffect(()=>{
    let secs = new Date().getSeconds();
    let timeout = setTimeout(()=>{setTime(new Date());clearTimeout(timeout)},secs*1000);
  },[time])

  return(
    <StyledMainInfo dayTime={props.dayTime}>
      <StyledTemperature isTemp><StyledParam param={"temperature"} expand={60}><p>Temperature</p>{props.temperature + "°C"}</StyledParam><StyledParam param={"humidity"}><p>Humidity</p>{props.humidity + "%"}</StyledParam><StyledParam param={"wind"}><p>Wind speed</p>{props.wind + "Km/h"}</StyledParam></StyledTemperature>
      <StyledName><p>{props.country + ", " + props.city}</p><p>{(time.getDate() < 10?"0"+time.getDate():time.getDate()) + "." + (time.getMonth() + 1) + "." + time.getFullYear()}</p> </StyledName>
      <StyledTime>{time.getMinutes() < 10?time.getHours()+":0"+time.getMinutes():time.getHours()+":"+time.getMinutes()}</StyledTime>
      <StyledIcon><StyledImage src={images[props.icon]} dayTime={props.dayTime}/></StyledIcon>
    </StyledMainInfo>
  )
}


export default MainInfo;
