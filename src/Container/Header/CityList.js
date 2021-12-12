import styled,{keyframes,css} from "styled-components";
import {connect} from "react-redux";
import {useState} from "react";

let expand = keyframes`
0%{
height: 0px;
}
50%{
height: 150px;
}
100%{
height: 300px;
}
`

let reexpand = keyframes`
0%{
height: 300px;
}
50%{
height: 150px;
}
100%{
height: 0px;
}
`
let StyledList = styled.div`
width: 300px;
background-color: rgb(61, 80, 179);
z-index: 3;
position: absolute;
opacity: .5;
${props => {let duration = props.duration;if(props.status == "closed"){return css`animation:${expand} ${duration}s linear forwards`}else if(props.status == "opened"){return css`animation:${reexpand} ${duration}s linear forwards`}}};
`

let StyledCity = styled.div`
width: 100%;
margin: 3px 0px 3px 0px;
background-color:rgb(212, 141, 67);
`

function List(props){
  console.log(props.list);
  let duration = 0.3;
  document.onclick = function(){
    if(time){return false};
    setTimeout(()=>{setTime(false)},duration*1000);
    if(status == "closed"){
      setStatus("opened")
    }else{
      setStatus("closed")
    }
    setTime(true);
  };
  let [status, setStatus] = useState("");
  let [time, setTime] = useState(false);
  return props.value && <StyledList status={status} duration={duration}>
    {props.list?.map((e,i)=>{return <ListMember country={e.country} city={e.city}/>})}
    </StyledList>

}


function ListMember(props){
  return (
    <StyledCity>{props.country} {props.city}</StyledCity>
  )
}


function stateToProps(state){
  return{

  }
}

function dispatchToProps(dispatch){
  return{

  }
}

export default connect(stateToProps,dispatchToProps)(List);
