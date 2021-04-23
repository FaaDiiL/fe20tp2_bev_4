import {Container} from '@material-ui/core'
import React, { Component } from 'react'
import { CgInfo, CgTrash } from 'react-icons/cg'
import { Link, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

import * as ROLES from '../../constants/roles'
import * as ROUTES from '../../constants/routes'
import { withFirebase } from '../Firebase'
import { withAuthorization } from '../Session'

const Header = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;

  h1 {
    color: #571d85;
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

const StyledContainer = styled.div`
  margin: 10px;
  width: 75%;
  min-height: 400px;
  color: black;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.5);

  @media (max-width: 414px) {
    width: 300px;

    span {
      font-size: 10px;
    }
  }
`

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.5);

  .last {
    text-align: right;
  }

  span {
    padding: 20px;
    color: black;
    width: 35%;
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
  }

  li {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    border-bottom: 1px solid gray;
  }

  button {
    color: black;
    background-color: white;
    border-radius: 4px;
    border: none;
    margin: auto 5px;
    &:hover {
      background-color: transparent;
      cursor: pointer;
    }
    & > * {
      font-size: 1.3rem;
    }
  }

  span {
    padding: 20px;
    width: 30%;
  }
  span.detail {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 5px;

    a {
      color: black;
    }
  }
`

const ResetPasswordButton = styled.button`
  border-radius: 4px;
  outline: none;
  font-size: 12px;
  padding: 15px;
  color: white;
  border: none;

  &:hover {
    cursor: pointer;
  }
`

const Menu = styled.div`
  width: 220px;
  height: 400px;

  span {
    color: white;
    font-size: 12px;
    display: block;
    padding: 0px 10px 5px 20px;
  }

  h3 {
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

    h1 {
      font-size: 14px;
    }
    h4 {
      font-size: 12px;
    }
  }
  @media (max-width: 320px) {
    width: 130px;

    h1 {
      font-size: 14px;
      padding: 4px;
    }
    h4 {
      font-size: 10px;
      padding: 4px;
    }
  }
`

const MemberCont = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  width: 550px;
  border-radius: 4px;
`

const Show = styled.div`
  display: flex;
  width:100%;
  justify-content:space-evenly;
  align-items: center;
  flex-direction: column;

  h2 {
    margin-bottom: 20px;
  }
  &::last-child{
    justify-self: flex-start;
  }
`

const Back = styled.button`
  border-radius: 4px;
  outline: none;
  font-size: 12px;
  padding: 15px;
  color: white;
  border: none;

  &:hover {
    cursor: pointer;
  }
`

const AdminPage = () => (
  <div>
    <Switch>
      <Route exact path={ROUTES.ADMIN_DETAILS} component={UserItem} />
      <Route exact path={ROUTES.ADMIN} component={UserList} />
    </Switch>
  </div>
)

class UserListBase extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      users: [],
    }
  }

  componentDidMount() {
    this.setState({ loading: true })

    this.props.firebase.users().on('value', (snapshot) => {
      const usersObject = snapshot.val()

      const usersList = Object.keys(usersObject).map((key) => ({
        ...usersObject[key],
        uid: key,
      }))

      this.setState({
        users: usersList,
        loading: false,
      })
    })
  }

  componentWillUnmount() {
    this.props.firebase.users().off()
  }

  render() {
    const { users, loading } = this.state

    return (
      <Container maxWidth='lg'>
        <Header>
          <h2>Admin Dashboard</h2>
          <h2>Members</h2>
        </Header>

        <PageContainer>
          {loading && <div>Loading ...</div>}

          <StyledContainer>
            <Div>
              <span>USERNAME:</span>
              <span>EMAIL:</span>
              <span className='last'>DETAILS:</span>
            </Div>
            <Members>
              <ul>
                {users.map((user) => (
                  <li key={user.uid}>
                    <span>{user.username}</span>
                    <span>{user.email}</span>
                    <span className='detail'>
                      <Link
                        to={{
                          pathname: `${ROUTES.ADMIN}/${user.uid}`,
                          state: { user },
                        }}
                      >
                        <CgInfo />
                      </Link>
                      <button>
                        <CgTrash className='deleteIcon' />
                      </button>
                    </span>
                  </li>
                ))}
              </ul>
            </Members>
          </StyledContainer>
        </PageContainer>
      </Container>
    )
  }
}

class UserItemBase extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      user: null,
      ...props.location.state,
    }
  }
  componentDidMount() {
    if (this.state.user) {
      return
    }
    this.setState({ loading: true })
    this.props.firebase
      .user(this.props.match.params.id)
      .on('value', (snapshot) => {
        this.setState({
          user: snapshot.val(),
          loading: false,
        })
      })
  }
  componentWillUnmount() {
    this.props.firebase.user(this.props.match.params.id).off()
  }

  onSendPasswordResetEmail = () => {
    this.props.firebase.doPasswordReset(this.state.user.email)

    alert('E-mail sent!')
  }

  render() {
    const { user, loading } = this.state
    return (
      <>
        <Header>
          <h2>Admin Dashboard</h2>
        </Header>

        <MemberCont className='borderColor'>
          {loading && <div>Loading ...</div>}
          <Menu className='adminMenu'>
            <h1>Member Details</h1>
            <h3>Username:</h3>
            <span> {user.username}</span>
            <h3>ID:</h3>
            <span>{this.props.match.params.id}</span>
            <h3>E-mail:</h3>
            <span> {user.email}</span>
          </Menu>
          <Show>
              <h2>Reset member password</h2>
              <ResetPasswordButton
                type='button'
                className='adminResetPassword'
                onClick={this.onSendPasswordResetEmail}
              >
                Password Reset
              </ResetPasswordButton>
              <Back>
                <Link
                  to={{
                    pathname: `${ROUTES.ADMIN}`,
                  }}
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  Back
                </Link>
              </Back>
          </Show>
        </MemberCont>
      </>
    )
  }
}

const condition = (authUser) => authUser && !!authUser.roles[ROLES.ADMIN]

const UserList = withFirebase(UserListBase)
const UserItem = withFirebase(UserItemBase)

export default withAuthorization(condition)(withFirebase(AdminPage))
