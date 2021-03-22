import styled from 'styled-components'

const BankContainer = styled.div`

select {
    padding: 5px 15px 5px 5px;
    margin: 5px;
  margin-bottom: 10px;
  }
  
  button {
    display: inline-block;
    padding: 5px;
  
    &:hover { 
      cursor: pointer;
      text-decoration: underline;
    }
  }
  `;

function ChooseBank ()
 {
    return ( 
    
    <BankContainer>
    <h3>Choose Bank</h3>
        <select name='bank' className='chooseBank'>
          <option value="" disabled selected>Select your Bank</option>
          <option>Swedbank</option>
          <option>Länsförsäkringar</option>
        </select>
    
    </BankContainer> );
}
 
export default ChooseBank;