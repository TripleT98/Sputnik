import styled from "styled-components";
import Main from "./Main/Main";
import Header from "./Header/Header";


let StyledContainer = styled.div`

`
function Container(){
  return (
    <StyledContainer>
       <Header />
       <Main />
    </StyledContainer>
  )
}

export default Container;
