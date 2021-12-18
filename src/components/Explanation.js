import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: ${pr => pr.theme.primaryColor};
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

h2{
    padding-top: 4%;
    font-size: 2rem;
}
h3{
    font-size: 2rem;
   
}
p{
    display: flex;
    font-size: 1.5rem;
    margin: 0 10%;  
    padding:  2%;
    width: 80%;

}
`
const StyleDiv2 = styled.div`
border: black 1px solid;
width: 60%;
margin: 0 10%;
`

function Explanation(props){
    return(
        <StyledDiv>
            
            <h3>{props.date}</h3>
            <StyleDiv2>
            </StyleDiv2>
            <p>{props.explanation}</p>
            <h2>{props.copyright}</h2>  
            <h6>{props.version}</h6>
        </StyledDiv>
    )
}
export default Explanation
