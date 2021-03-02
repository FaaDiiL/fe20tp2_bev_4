import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
     display: flex;
     justify-content: center;

.selectContainer{

}
`

function Landing (){
     return (
          <StyledContainer>
               <h1>Landing page</h1>
               <select className='selectContainer' id="countries">
                    <option value="GBP">GBP</option>
                    <option value="EUR">EUR</option>
                    <option value="USD">USD</option>
               </select>
          </StyledContainer>
     )
}

export default Landing
