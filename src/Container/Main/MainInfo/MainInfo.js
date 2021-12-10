import styled from "styled-components";
import {useState, useEffect} from "react";
import sun from "./../../../Images/01d.png";
import sun_cloud from "./../../../Images/02d.png";
import cloud from "./../../../Images/03d.png";
import cloud_2 from "./../../../Images/02d.png";
import cloud_rain from "./../../../Images/09d.png";
import cloud_rain_sun from "./../../../Images/10d.png";
import lightning from "./../../../Images/11d.png";
import snow from "./../../../Images/13d.png";
import mist from "./../../../Images/50d.png"

let StyledMainInfo = styled.div`
grid-area: m;
display: grid;
grid-template-areas: "st st sc"
                     "st st sc"
                     "sn sn si";
grid-template-columns:1fr 1fr 350px;
grid-template-rows: .4fr .4fr .75fr;
grid-gap: 10px;
background-color: transparent;
font-family: monospace;
font-size: 50px;
text-align: center;
color: rgb(246, 246, 246);
`

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
&:before{
  content: "";
  position: absolute;
  background: inherit;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: inset 0 0 2000px rgba(241, 241, 241, 0.5);
  filter: blur(1px);
}
`

let StyledName = styled(StyledTemperature)`
flex-direction: column;
font-size: 50px;
grid-area: sn;
`

let StyledTime = styled(StyledTemperature)`
font-size: 50px;
grid-area: si;
`

let StyledIcon = styled(StyledTemperature)`
font-size: 50px;
grid-area: sc;
background: ${props=>`url(${sun}) no-repeat 50%`};
background-size: 150px;
filter: grayscale(1);
`

function MainInfo(props){
  let [time, setTime] = useState(new Date());

  useEffect(()=>{
    let secs = new Date().getSeconds();
    let timeout = setTimeout(()=>{setTime(new Date());clearTimeout(timeout)},secs*1000);
  },[time])

  return(
    <StyledMainInfo>
      <StyledTemperature><p>{props.temperature + "°C"}</p></StyledTemperature>
      <StyledName>     <p>{props.country + ", " + props.city}</p><p>{(time.getDate() < 10?"0"+time.getDate():time.getDate()) + "." + (time.getMonth() + 1) + "." + time.getFullYear()}</p> </StyledName>
      <StyledTime>      {time.getMinutes() < 10?time.getHours()+":0"+time.getMinutes():time.getHours()+":"+time.getMinutes()}</StyledTime>
      <StyledIcon></StyledIcon>
    </StyledMainInfo>
  )
}

function Temperature(){
  return(
<></>
  )
}

function Name(){
  return(
<></>
  )
}

function Time(){
  return(
<></>
  )
}

function Icon(){
  return(
<></>
  )
}

export default MainInfo;
