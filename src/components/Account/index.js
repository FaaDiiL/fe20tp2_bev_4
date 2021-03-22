import React from "react";
import {useState} from "react"; 
import styled from 'styled-components'
import ChangePassword from '../Account/ChangePassword'; 
import ChooseBank from '../Account/ChooseBank';
import DeleteAccount from '../Account/DeleteAccount'; 
import { AuthUserContext, withAuthorization } from "../Session";
/* import { FiberPin } from "@material-ui/icons"; */


const Account = styled.div`
display: flex;
flex-direction: row; 

`;

const Menu = styled.div`

background-image: linear-gradient(rgba(109, 84, 129, 0.829), rgb(96, 57, 128));
width: 210px;
height: 400px;

h1 { 
  display: block;
  color: white;
  letter-spacing: 1.5px;
  padding: 10px 20px 5px 20px; 
  }
  h4 {
    margin-bottom: 50px;
    color: white;
    padding: 5px 20px 20px 20px;  
  }
`;

const SelectMenu = styled.div`

h3 { 
  padding: 25px;
  color: white;

&:hover {
  cursor: pointer;

  background-color: rgb(96, 57, 128);
}
}
`;

const PageContainer = styled.div`
display: flex;

flex-direction: column;
margin: 0 auto;
border: 2px solid #571D85;
width: 60%;
border-radius: 4px;
`;




function AccountPage () {

  const [pageShown, setPageShown] = useState('ChooseBank'); 

  function ChooseBank(){
    setPageShown("ChooseBank")
  }
  
  function ChangePassword (){
  setPageShown("ChangePassword")
  }
  
  function DeleteAccount() {
  setPageShown("DeleteAccount")
  }


const pageShownComponent = (props) => {
  if (props.pageShown === "ChooseBank") {
    return  <ChooseBank/> 

  } else if (props.pageShown === "ChangePassword"){
    return <ChangePassword />
  }
   else if (props.pageShown === "DeleteAccount"){
    return <DeleteAccount />
  } 
}


return(
  <AuthUserContext.Consumer>
    {(authUser) => (
<>
<Account>
<PageContainer>
      <Menu>
            <h1>Account:</h1> 
            <h4>{authUser.email}</h4>
            <SelectMenu>
            <h3 onClick={ChooseBank}>Choose Bank</h3>
            <h3 onClick={ChangePassword}>Change Password</h3>
            <h3 onClick={DeleteAccount}>Delete Account</h3>
            </SelectMenu>
   </Menu>
      
   
    pageShownComponent()
       </PageContainer> 
      </Account>
      </>
    )}
  </AuthUserContext.Consumer>
)};

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(AccountPage);
