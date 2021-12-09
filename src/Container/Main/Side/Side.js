import styled from "styled-components";

let StyledSide = styled.div`
grid-area: s;
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
function Side(){
  return (
    <StyledSide>
      Side
    </StyledSide>
  )
}

export default Side;
