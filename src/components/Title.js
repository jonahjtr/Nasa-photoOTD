import React from 'react';
import styled from 'styled-components';

// #032357
const Styledimgdiv = styled.div`

    margin: -42.88px 0px;
background-color: ${pr => pr.theme.primaryColor};

    h1{
       padding: 1%;
        font-family: 'Helvetica Neue';
        font-size: 4rem;
        color: ${pr => pr.theme.white};
    }

`


function Title(props){
    return( 
    
        <Styledimgdiv>
         <h1> {props.title} </h1>
        </Styledimgdiv>
        
    )
}

export default Title