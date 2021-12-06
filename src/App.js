import Container from "./Container/Container";
import styled,{createGlobalStyle}  from "styled-components";

let StyledApp = styled.div`
padding: 80px;
background-color: rgb(246, 246, 246);
display: flex;
justify-content: center;

`

let Global = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  font-family: "Arial";
}
`

function App() {
  return (
    <StyledApp>
       <Global/>
       <Container/>
    </StyledApp>
  );
}

export default App;
