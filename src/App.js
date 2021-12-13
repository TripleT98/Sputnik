import Container from "./Container/Container";
import styled,{createGlobalStyle}  from "styled-components";
import {Provider} from "react-redux";
import store from "./STORE/STORE";
import {getInfoAboutCity} from "./DAL/DAL";

let StyledApp = styled.div`
padding: 80px;
background-color: rgb(246, 246, 246);
display: flex;
justify-content: center;
height: max-content;
`

let Global = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  font-family: "Arial";
  overflow: hidden;
  
}
`

function App() {
  return (
    <Provider store={store}>
    <StyledApp>
       <Global/>
       <Container/>
    </StyledApp>
    </Provider>
  );
}


export default App;
