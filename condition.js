import React from 'react';
import styled from '@emotion/styled';

const Condition = ({temp,condition}) => {
    
    const Temp = styled.h1`
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 2rem;
    `
    const State = styled.h3`
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 1.2rem;

    `    
    return (
        <>
            <Temp>{Math.round(temp * 9/5 + 32)} °F</Temp>
            <State>{condition}</State>
        </>
      );
}
 
export default Condition;