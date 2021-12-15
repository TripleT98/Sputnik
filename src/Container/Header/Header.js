import styled,{css} from "styled-components";
import {useState} from "react";
import {setPlaceThunkCreator,getCityListThunk} from "./../../STORE/WeatherReducer";
import {connect} from "react-redux";
import List from "./CityList";

let StyledHeader = styled.div`
margin-bottom: 20px;
height: 8%;
width: 100%;
position: relative;
z-index: 100;
overflow: visible;
`

let StyledInput = styled.input`
${props=>props.fadeStatus === "fadeIn" && css`display: none`};
width: 300px;
height: 34px;
padding-right: 10px;
background-color: transparent;
border: none;
border-bottom: 2px rgb(165, 171, 172) solid;
outline: none;
color: ${props=>props.dayTime === "day"?"black":"rgb(165, 171, 172)"};
font-size: 25px;
background: linear-gradient(to top, rgb(165, 171, 172), transparent);
border-radius: 4px;
`

let StyledButton = styled.button`
${props=>props.fadeStatus === "fadeIn" && css`display: none`};
margin-left: 30px;
background-color: transparent;
position: relative;
z-index: 3;
top: 1px;
left: 0px;
width: 40px;
font-size: 25px;
border: none;
color: ${props=>props.dayTime === "day"?"black":"rgb(165, 171, 172)"};
transition-duration: .4s;
overflow: visible;
width: max-content;
background: linear-gradient(to top, rgb(165, 171, 172), transparent);
padding: 3px;
border-radius: 4px;
&:hover{
  transition-duration: .7s;
  cursor: pointer;
  color: rgb(241, 241, 241);
}
`

function Header(props){
  let [value, setValue] = useState("");


  function onClickHandler(e){
    props.fade("fadeIn");
    setTimeout(()=>{props.setPlace(value);
    setValue("")},500);
  };

  function onChangeHandler(e){
    let val = e.target.value?.[0]?.toUpperCase() + e.target.value?.slice(1);
    setValue(e.target.value);
    props.setList(val);
  }

  return (
    <StyledHeader>
       <StyledInput value={value} onChange={onChangeHandler} dayTime={props.dayTime} fadeStatus={props.fadeStatus}></StyledInput><StyledButton fadeStatus={props.fadeStatus} onClick={onClickHandler} dayTime={props.dayTime}>Search</StyledButton>
       <List list={props.list} value={value} setValue={setValue} dayTime={props.dayTime} fade={props.fade}></List>
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
