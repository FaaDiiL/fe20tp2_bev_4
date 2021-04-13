import styled from "styled-components";

const Container = styled.footer`
  position: absolute;  
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  width: 100vw;
  margin-top: 120px;

  h5 {
    margin: 0 auto;
  }
`;

const Footer = () => {
  return (
    <Container className="footer">
      <h5>Copyright BEV 2021 ©</h5>
    </Container>
  );
};

export default Footer;
