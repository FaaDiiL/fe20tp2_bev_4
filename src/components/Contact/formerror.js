import styled from "styled-components";

const DIV = styled.div`
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 40%;
  margin: 0 auto;

  h3 {
    font-size: 0.6rem;
    color: #fff;
    font-weight: 400;
    text-transform: uppercase;
    text-align: center;
  }
`;

const FormError = ({ error }) => {
  return (
    <DIV>
      <h3>{error}</h3>
    </DIV>
  );
};

export default FormError;
