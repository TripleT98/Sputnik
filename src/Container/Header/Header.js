import styled from "styled-components";
import {useState} from "react";
import {setPlaceThunkCreator,getCityListThunk} from "./../../STORE/WeatherReducer";
import {connect} from "react-redux";
import List from "./CityList";

let StyledHeader = styled.div`
margin-bottom: 20px;
height: 8%;
width: 100%;
`

let StyledInput = styled.input`
width: 300px;
height: 40px;
background-color: transparent;
border: none;
border-bottom: 2px rgb(165, 171, 172) solid;
outline: none;
color: rgb(165, 171, 172);
font-size: 25px;
`

let StyledButton = styled.button`
margin-left: 30px;
background-color: transparent;
position: relative;
top: 0px;
left: 0px;
width: 40px;
font-size: 25px;
border: none;
color: rgb(165, 171, 172);
transition-duration: .4s;
&:hover{
  transition-duration: .4s;
  cursor: pointer;
  color: rgb(75, 75, 75);
}
`

function Header(props){
  let [value, setValue] = useState("");


  function onClickHandler(e){
    props.setPlace(value)
    setValue("");
  }

  function onChangeHandler(e){
    let val = e.target.value?.[0]?.toUpperCase() + e.target.value?.slice(1);
    setValue(e.target.value);
    props.setList(val);
  }

  return (
    <StyledHeader>
       <StyledInput value={value} onChange={onChangeHandler}></StyledInput><StyledButton onClick={onClickHandler}>Search</StyledButton>
       <List list={props.list} value={value}></List>
    </StyledHeader>
  )
}

function stateToProps(state){
  return{
     list: state.forWeather.list,
  }
}

function dispatchToProps(dispatch){
  return{
    setPlace: function(place){
      dispatch(setPlaceThunkCreator(place));
    },
    setList: function(word){
      dispatch(getCityListThunk(word));
    }
  }
}

export default connect(stateToProps, dispatchToProps)(Header);
