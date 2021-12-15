import styled from "styled-components";
import {connect} from "react-redux";
import {setPlaceThunkCreator} from "./../../STORE/WeatherReducer";


let StyledCity = styled.div`
width: 100%;
margin: 3px 0px 3px 0px;
background-color:rgb(212, 141, 67);
max-width: max-content;
min-width: 300px;
height: 50px;
background-color: rgba(148, 148, 148, 0.35);
cursor: pointer;
position: relative;
z-index: 100;
padding-left: 10px;
display: flex;
align-items: center;
font-weight: 600;
font-size: 15px;
color: rgb(226, 226, 232);
border: 2px solid rgb(226, 226, 232);
transition-duration: .3s;
&:hover{
  background-color:rgb(226, 226, 232);
  color: rgb(105, 105, 105);
  transition-duration: .3s;
}
`

function List(props){

  return props.value && <div>
    {props.list?.map((e,i)=>{return <ListMember country={e.country} city={e.city} setPlace={props.setPlace} setValue={props.setValue} fade={props.fade}/>})}
    </div>

}


function ListMember(props){

  function onClickHandler(e){
    props.fade("fadeIn");
    setTimeout(()=>{props.setPlace(props.city);
    props.setValue("");},500);
  };

  return (
    <StyledCity onClick={onClickHandler}><p>{props.country} | {props.city}</p></StyledCity>
  )
}


function stateToProps(state){
  return{

  }
}

function dispatchToProps(dispatch){
  return{
    setPlace: function(place){
      dispatch(setPlaceThunkCreator(place))
    }
  }
}

export default connect(stateToProps,dispatchToProps)(List);
