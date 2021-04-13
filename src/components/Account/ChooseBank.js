import styled from 'styled-components'

import { withFirebase } from '../Firebase'

const BankContainer = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    margin: 0 auto;
    margin-bottom: 15px;
  }

  select {
    padding: 5px 15px 5px 5px;
    margin: 5px;
    margin-bottom: 30px;
    outline: none;
  }

  button {
    padding: 5px;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`

const  Bank = ({ firebase }) => {
  
  async function updateBank(e) {
    e.preventDefault()
    // const curUser = await firebase.currentUser(e.)
    if (
      (e.target[0].value.length > 0 && e.target[0].value === 'LF') ||
      e.target[0].value === 'SB' ||
      e.target[0].value === 'default'
    ) {
      firebase.updateCurrentUserBank(e.target[0].value)
      // let test = await firebase.updateCurrentUserBank()
      // console.log(test)
    }
  }

  return (
    <BankContainer>
      <h3>Choose Bank</h3>
        <form onSubmit={updateBank }>
          <select name='bank' className='chooseBank' defaultValue=''>
            <option style={{ display: 'none' }} value={''} disabled>
              Select your Bank
            </option>
            <option value='default'>No Bank</option>
            <option value='SB'>Swedbank</option>
            <option value='LF'>Länsförsäkringar</option>
          </select>

          <button>Save</button>
        </form>
    </BankContainer>
  )
}

export default withFirebase(Bank)
