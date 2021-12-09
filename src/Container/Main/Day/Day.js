import styled from "styled-components";
import {StyledTemperature} from "./../MainInfo/MainInfo";
import sun from "./../../../Images/01d.png";
import sun_cloud from "./../../../Images/02d.png";
import cloud from "./../../../Images/03d.png";
import cloud_2 from "./../../../Images/02d.png";
import cloud_rain from "./../../../Images/09d.png";
import cloud_rain_sun from "./../../../Images/10d.png";
import lightning from "./../../../Images/11d.png";
import snow from "./../../../Images/13d.png";
import mist from "./../../../Images/50d.png"

let StyledDays = styled.div`
grid-area: d;
display: flex;
justify-content: space-between;
`

let StyledDay = styled(StyledTemperature)`
height: 100%;
width: 13.5%;
display: grid;
grid-template-areas: "i i t" "i i t" "n n n";
`

let StyledIcon = styled.div`
grid-area: i;
width: 100%;
height: 100%;
background-repeat: no-repeat;
background-image:${props=>`url(${sun})`};
background-size: 90px 90px;
filter: grayscale(1);
background-position: 10px 10px;
`


let StyledTemp = styled.div`
grid-area: t;
width: 100%;

`

let StyledName = styled.div`
grid-area: n;
width: 100%;
`

function Day(){
  return (
    <StyledDay>
     <StyledIcon></StyledIcon>
     <StyledTemp />
     <StyledName />
    </StyledDay>
  )
}

function Days(){
  let arr = [];
  for(let i = 0; i < 7; i++){
    arr.push(<Day/>)
  }
  return(
    <StyledDays>
      {arr}
    </StyledDays>
  )
}


export default Days;
