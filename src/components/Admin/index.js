import React, { Component } from "react";
import { CgTrash } from 'react-icons/cg'
import { Link, Route, Switch } from "react-router-dom";
import styled from 'styled-components'

import * as ROLES from "../../constants/roles";
import * as ROUTES from "../../constants/routes";
import { withFirebase } from "../Firebase";
import { withAuthorization } from "../Session";

import "firebase/auth";

const Header = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;

  h1 {
    color: #571D85;
    font-size: 40px;
    margin: 0 auto;
    padding: 15px;
    letter-spacing: 1.5px;
 
    @media (max-width: 414px) {
      font-size: 18px;
         }

         @media (max-width: 320px) {
          font-size: 14px;
             }
  }
  h2 {
    text-align: center;
    padding: 15px;
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
  color: black;
  box-shadow: 1px 3px 5px #571D85;



  @media (max-width: 414px) {
    width: 300px;

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
    width: 35%;
    font-weight: bold;
  }`

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
padding: 15px;
color: white;
border: none;
background-color: #571D85;

&:hover {
  cursor: pointer;
  text-decoration: underline;
}
`;

const Menu = styled.div`
background-image: linear-gradient(rgba(109, 84, 129, 0.829), rgb(96, 57, 128));
width: 220px;
height: 400px;

span{
  color: white;
  font-size: 12px;
  display: block;
  padding: 0px 10px 5px 20px; 
}

h3{
  color: white;
  padding: 20px;
}

h1 { 
  display: block;
  color: white;
  letter-spacing: 1.5px;
  padding: 20px;
  }

  h4 {
    margin-bottom: 30px;
    color: white;
    padding: 5px 20px 20px 20px;  
  }

  @media (max-width: 375px) {
    width: 160px;
  
    h1{
      font-size: 14px;
    }
    h4{
      font-size: 12px;
    }
  }
    @media (max-width: 320px) {
      width: 130px;
    
      h1{
        font-size: 14px;
        padding: 4px;
      }
      h4{
        font-size: 10px;
        padding: 4px;
      }
    }
`;



const MemberCont = styled.div`
display: flex;
flex-direction: row;
margin: 0 auto;
border: 2px solid #571D85;
width: 550px;
border-radius: 4px;
`;

const Show = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin: 0 auto;

h3{
  margin-bottom: 10px;
  color: #571D85;
}
`;

const Back = styled.div`
text-align: center;
padding: 30px;
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

    //Listener to fetch users in database 
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
        <h2>Members</h2>
      </Header>

     <PageContainer> 
          {loading && <div>Loading ...</div>}

          <Container>
         
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

    alert("E-mail sent!");
  };

  render() {
    const { user, loading } = this.state;
return (
      <>
           <Header>
        <h1>Admin Dashboard</h1>
      </Header>


      <MemberCont>
      {loading && <div>Loading ...</div>}
      <Menu>
            <h1>Member Details</h1> 
           <h3>Username:</h3> 
           <span> {user.username}</span>
            <h3>ID:</h3>
            <span>{this.props.match.params.id}</span>
           <h3>E-mail:</h3> 
           <span> {user.email}</span>  
   </Menu>
   <Show>
   <h3>Reset member password</h3>
          <ResetPasswordButton type="button" onClick={this.onSendPasswordResetEmail}>
              Password Reset
              </ResetPasswordButton>
              </Show>
          </MemberCont>    

<Back>
            <Link
                  to={{
                    pathname: `${ROUTES.ADMIN}`,
                  }}
                >
                  Back
                </Link> 
                </Back>
                </>
    );
  }
}

const condition = (authUser) => authUser && !!authUser.roles[ROLES.ADMIN];

const UserList = withFirebase(UserListBase);
const UserItem = withFirebase(UserItemBase);


export default withAuthorization(condition)(withFirebase(AdminPage));
