import styled,{css} from "styled-components";
import {getNASA_info} from "./../../../DAL/DAL";
import {useState, useEffect} from "react";


let StyledSide = styled.div`
grid-area: s;
min-width: 170px;
background:${props=>`url(${props.backImage})`};
background-size: cover;
overflow: auto;
border-radius: 3px;
color:rgb(217, 216, 216);
&::-webkit-scrollbar {
  width: 0px;
}
`

let StyledParagraph = styled.p`
margin: 20px 15px 15px 15px;
line-height: 24px;
text-indent: 20px;
text-align: justify;
font-family: "Roboto";
font-size: 20px;
font-weight: 600;
${props=>props.title && css`text-align: center;text-indent: 0px`};
`

function Side(){
  useEffect(()=>{
    getNASA_info().then((data)=>{setText(data.explanation);setImage(data.url);setTitle(data.title)});
  },[]);
  let [text, setText] = useState("");
  let [image, setImage] = useState("");
  let [title, setTitle] = useState("");
  return (
    <StyledSide backImage={image}>
      <StyledParagraph title="true">{title}</StyledParagraph>
      <StyledParagraph>{text}</StyledParagraph>
    </StyledSide>
  )
}

export default Side;
