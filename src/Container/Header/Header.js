import styled from "styled-components";
import {useState} from "react";

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

function Header(){
  let [value, setValue] = useState("");

  return (
    <StyledHeader>
       <StyledInput value={value} onChange={(e)=>{setValue(e.target.value)}}></StyledInput><StyledButton onClick={(e)=>{setValue("")}}>Search</StyledButton>
    </StyledHeader>
  )
}

export default Header;
