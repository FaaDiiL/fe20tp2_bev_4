import styled from "styled-components";

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
    padding: 5px;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

function Bank() {
  return (
    <BankContainer>
      <h2>Choose Bank</h2>
      <select name="bank" className="chooseBank" defaultValue="default">
        <option value="default" disabled>
          Select your Bank
        </option>
        <option value="SB">Swedbank</option>
        <option value="LF">Länsförsäkringar</option>
      </select>

      <button>Save</button>
    </BankContainer>
  );
}

export default Bank;
