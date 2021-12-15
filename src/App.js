import Container from "./Container/Container";
import styled,{createGlobalStyle}  from "styled-components";
import {Provider} from "react-redux";
import store from "./STORE/STORE";
import {connect} from "react-redux";
import {wallpaper} from "./Images/Images";

let StyledApp = styled.div`
padding: 80px;
background-color: rgb(246, 246, 246);
display: flex;
background: ${props => `url(${wallpaper[props.icon]?.[props.dayTime]})` || "url(https://phonoteka.org/uploads/posts/2021-06/1624879195_9-phonoteka_org-p-kapli-dozhdya-na-stekle-oboi-krasivo-12.jpg)"};
justify-content: center;
height: max-content;
}
`

let Global = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  font-family: "Arial";
}
`

function App(props) {
  let hours = new Date().getHours();
  let dayTime = hours >= 18 || hours <= 4?"night":"day";
  return (
    <StyledApp icon={props.icon} dayTime={dayTime}>
       <Container dayTime={dayTime}/>
    </StyledApp>
  );
}

function stateToProps(state){
  return{
    icon: state.forWeather.weather.icon
  }
}


let ConnectedApp = connect(stateToProps)(App)


function AppContainer(props){
  return(
    <Provider store={store}>
        <Global />
        <ConnectedApp>
        </ConnectedApp>
    </Provider>
  )
}

export default AppContainer;
