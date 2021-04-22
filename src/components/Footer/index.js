import styled from "styled-components";

const Container = styled.footer`
  display: flex;
  justify-content: center;
  padding: 50px;
  margin-top: 150px;

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
