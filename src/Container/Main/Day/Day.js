import styled from "styled-components";

let StyledDays = styled.div`
background-color:rgb(250, 7, 167);
grid-area: d;
display: flex;
justify-content: space-between;
`

let StyledDay = styled.div`
background-color:rgb(29, 67, 201);
height: 100%;
width: 13%;
`

function Day(){
  return (
    <StyledDay>
      Day
    </StyledDay>
  )
}

function Days(){
  let arr = [];
  for(let i = 0; i < 7; i++){
    arr.push(<Day/>)
  }
  return(
    <StyledDays>
      {arr}
    </StyledDays>
  )
}


export default Days;
