import styled from 'styled-components'

import { withFirebase } from '../Firebase'

const BankContainer = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
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
    display: block;
    padding: 5px;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`

const Bank = ({ firebase }) => {
   
  const updateBank = (e) => {
    // const curUser = await firebase.currentUser(e.)
    const selectedBank= e.target[0].value
    if (
      (selectedBank.length > 0 && selectedBank === 'LF') ||
      selectedBank === 'SB' ||
      selectedBank === 'default'
    ) {
      firebase.updateCurrentUserBank(selectedBank)
      // let test = await firebase.updateCurrentUserBank()
    }
  }

  return (
    <BankContainer >
      <h2>Choose Bank</h2>
      <form onSubmit={updateBank}>
        <select name='bank' className='chooseBank' defaultValue=''>
          <option style={{ display: 'none' }} value={''} disabled>
            {' '}
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
