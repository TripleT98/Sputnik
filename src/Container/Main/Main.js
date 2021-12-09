import styled from "styled-components";
import Days from "./Day/Day";
import MainInfo from "./MainInfo/MainInfo";
import Side from "./Side/Side";
import {connect} from "react-redux";

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
  return (
    <StyledMain>
      <MainInfo {...props}/>
      <Side />
      <Days />
    </StyledMain>
  )
}

function stateToProps(state){
  return{
    country: "KZ",
    city: "TARAZ",
    temperature: 25,
    humidity: 100,
    pressure: 1018,
    wind: 9
  }
}

function dispatchToProps(dispatch){
  return{

  }
}

export default connect(stateToProps, dispatchToProps)(Main);
