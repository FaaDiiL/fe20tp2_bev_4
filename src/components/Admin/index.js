import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";

import { withFirebase } from "../Firebase";
import { withAuthorization } from "../Session";
import * as ROLES from "../../constants/roles";
import * as ROUTES from "../../constants/routes";
import styled from 'styled-components'
import { CgTrash } from 'react-icons/cg'

const Header = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  background-color: #053d57;

  h1 {
    color: #f2f1ef;
    font-size: 40px;
    margin: 0 auto;
    padding: 15px;
 
    @media (max-width: 414px) {
      font-size: 18px;
         }

         @media (max-width: 320px) {
          font-size: 14px;
             }
  }
`

 const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
` 

const Container = styled.div`
  margin: 10px;
  width: 75%;
  min-height: 400px;
  background-color: #f2f1ef;
  color: black;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.5);

  h2 {
    text-align: center;
    padding: 15px;
  }

  @media (max-width: 414px) {
    width: 300px;

    h2{
      font-size: 14px;
    }
    span{
      font-size: 10px;
    }
       }
`

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.5);

  span {
    padding: 20px;
    color: black;
    width: 30%;
    font-weight: bold;
  }
 
`

const Members = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;

  ul {
    display: flex;
    flex-direction: column;
    width: 100%;
    list-style: none;
    padding-inline-start: 20px;
  }

  li {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }

  button {
    font-size: 1.3rem;
    color: black;
    background-color: rgba(255, 255, 255,0); 
    border-radius: 4px;
    border: none;
    padding: 3px;
    position: relative;
    right: 22px;
    top:5px;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }

  span {
    padding: 20px;
    width: 30%;
  }
`

const ResetPasswordButton = styled.button`
border-radius: 4px;
outline: none;
font-size: 12px;
`;


const AdminPage = () => (
  <div>

    <Switch>
      <Route exact path={ROUTES.ADMIN_DETAILS} component={UserItem} />
      <Route exact path={ROUTES.ADMIN} component={UserList} />
    </Switch>
  </div>
);

class UserListBase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      users: [],
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    this.props.firebase.users().on("value", (snapshot) => {
      const usersObject = snapshot.val();

      const usersList = Object.keys(usersObject).map((key) => ({
        ...usersObject[key],
        uid: key,
      }));

      this.setState({
        users: usersList,
        loading: false,
      });
    });
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  render() {
    const { users, loading } = this.state;

    return (
      <div>
         <Header>
        <h1>Admin Dashboard</h1>
      </Header>

     <PageContainer> 
          {loading && <div>Loading ...</div>}

          <Container>
            <h2>Members</h2>
            <Div>
              <span>USERNAME:</span>
              <span>EMAIL:</span>
              <span>DETAILS:</span>
            </Div>
            <Members>
              <ul>
                {users.map((user) => (
                  <li key={user.uid}>
                    <span>{user.username}</span>
                    <span>{user.email}</span>
                <span>
                <Link
                  to={{
                    pathname: `${ROUTES.ADMIN}/${user.uid}`,
                    state: { user },
                  }}
                >
                  Details
                </Link>
                  </span> 
                    <button>
                      <CgTrash className='icon' />
                    </button>
                  </li>
                ))}
              </ul>
            </Members>
            </Container>

          <Container>
            <h2>Statistics</h2>
          </Container>

      </PageContainer> 
 

      </div>
    );
  }
}

class UserItemBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      user: null,
      ...props.location.state,
    };
  }
  componentDidMount() {
    if (this.state.user) {
      return;
    }
    this.setState({ loading: true });
    this.props.firebase
      .user(this.props.match.params.id)
      .on("value", (snapshot) => {
        this.setState({
          user: snapshot.val(),
          loading: false,
        });
      });
  }
  componentWillUnmount() {
    this.props.firebase.user(this.props.match.params.id).off();
  }

  onSendPasswordResetEmail = () => {
    this.props.firebase.doPasswordReset(this.state.user.email);
  };

  render() {
    const { user, loading } = this.state;
    return (
      <>
           <Header>
        <h1>Admin Dashboard</h1>
      </Header>

    <PageContainer> 
        <h2>Member ({this.props.match.params.id})</h2>
          {loading && <div>Loading ...</div>}

          <Container>

            <Div>
              <span>USERNAME:</span>
              <span>EMAIL:</span>
              <span>ID:</span>
            </Div>
            <Members>
            {user && (
          <div>
            <span>
            {user.username}
            </span>
            <span>
            {user.email}
            </span>
            <span>
             {user.uid}
            </span>
            <span>
              <ResetPasswordButton type="button" onClick={this.onSendPasswordResetEmail}>
                Send Password Reset
              </ResetPasswordButton>
            </span>
          </div>
        )}

            </Members>
            </Container>
       </PageContainer>

      
       
     
      </>
    );
  }
}

const condition = (authUser) => authUser && !!authUser.roles[ROLES.ADMIN];

const UserList = withFirebase(UserListBase);
const UserItem = withFirebase(UserItemBase);

// export default withAuthorization(condition)(withFirebase(AdminPage));


export default withAuthorization(condition)(withFirebase(AdminPage));
