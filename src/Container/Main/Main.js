import styled from "styled-components";
import Day from "./Day/Day";
import MainInfo from "./MainInfo/MainInfo";
import Side from "./Side/Side";


let StyledMain = styled.div`
height: 85%;
background-color:rgb(150, 250, 7);
display: grid;
grid-template-areas: "m m m s"
                     "m m m s"
                     "d d d d";
grid-gap: 10px;
`
function Main(){
  return (
    <StyledMain>
      <MainInfo />
      <Side />
      <Day />
    </StyledMain>
  )
}

export default Main;
