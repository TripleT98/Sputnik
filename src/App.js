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
background-image:${props=>props.status == "rainy" && "url(https://phonoteka.org/uploads/posts/2021-06/1624879195_9-phonoteka_org-p-kapli-dozhdya-na-stekle-oboi-krasivo-12.jpg)"};
overflow: hidden;
height: max-content;
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
    <Provider store={store}>
    <StyledApp status={"rainy"}>
       <Global/>
       <Container/>
    </StyledApp>
    </Provider>
  );
}

export default App;
