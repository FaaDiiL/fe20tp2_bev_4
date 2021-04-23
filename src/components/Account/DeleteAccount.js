import styled from "styled-components";

import { withFirebase } from "../Firebase";
import { AuthUserContext, withAuthorization } from "../Session";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    margin: 20px;
  }

  button {
    margin: 20px;
    padding: 5px;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

function DeleteAccount({firebase}) {
  
  return (
    <AuthUserContext.Consumer>
      {(authUser) => (
        <Container>
          <h2>Delete Account</h2>
          <form onSubmit={firebase.deleteCurrentUser} >
            <button>Delete account</button>
          </form>
        </Container>
      )}
    </AuthUserContext.Consumer>
  );
}

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(withFirebase(DeleteAccount));
