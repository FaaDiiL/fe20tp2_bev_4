import styled from "styled-components";
import { AuthUserContext, withAuthorization } from "../Session";
import "firebase/auth";
import "firebase/database";
import firebase from "firebase";
import app from "firebase/app";

const Container = styled.div`
  display: flex;
  flex-direction: column;

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

function DeleteAccount() {
  function Delete() {
    let user = firebase.auth().currentUser;

    try {
      // Try deleting the user from the user list
      user.delete();

      // If successful, also delete the post of the user in the realtime database
      let userRef = app.database().ref(`users/${user.uid}`);
      userRef.remove();
    } catch (error) {
      alert(
        "Error. It was too long ago since you logged in. Please log out, and then back in, and try deleting your account again"
      );
    }
  }

  return (
    <AuthUserContext.Consumer>
      {(authUser) => (
        <Container>
          <h2>Delete Account</h2>
          <button onClick={Delete}>Delete account</button>
        </Container>
      )}
    </AuthUserContext.Consumer>
  );
}

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(DeleteAccount);
