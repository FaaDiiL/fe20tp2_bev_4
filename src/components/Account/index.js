import React from "react";
import { useState } from "react";
import styled from 'styled-components'

import Password from '../Account/ChangePassword';
import Bank from '../Account/ChooseBank';
import Delete from '../Account/DeleteAccount';
import { AuthUserContext, withAuthorization } from "../Session";

/* import { FiberPin } from "@material-ui/icons"; */


const Account = styled.div`
margin-top: 100px;
display: flex;
flex-direction: row; 

`;

const Menu = styled.div`
padding-bottom:50px;
/* background-image: linear-gradient(rgba(109, 84, 129, 0.829), rgb(96, 57, 128)); */
width: 210px;
height: 400px;

h1 { 
  display: block;
  /* color: white; */
  letter-spacing: 1.5px;
  padding: 10px 20px 5px 20px; 
  }

  h4 {
    margin-bottom: 30px;
    /* color: white; */
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

const SelectMenu = styled.div`
h3 { 
  padding: 25px;
  /* color: white; */

&:hover {
  cursor: pointer;

  /* background-color: rgb(96, 57, 128); */
}
}
@media (max-width: 375px) {

  h3{
    font-size: 12px;
  }
}
  @media (max-width: 320px) {

    h3{
 font-size: 10px;
    }
  }
`;

const PageContainer = styled.div`
display: flex;
flex-direction: row;
margin: 0 auto;

width: 550px;
border-radius: 4px;
`;

const Show = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 0 auto;
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


const pageShownComponent = () => {
  if (pageShown === "ChooseBank") {
    console.log("Hej från choosebank")
    return  <Bank/> 

  } else if (pageShown === "ChangePassword"){
    console.log("Hej från changepassword")
    return <Password />
  }
   else if (pageShown === "DeleteAccount"){
    console.log("Hej från deleteaccount")
    return <Delete />
  } 
}


return(
  <AuthUserContext.Consumer>
    {(authUser) => (
<>
<Account>
<PageContainer className='borderColor'>
      <Menu className='accountMenu'>
            <h1>Account:</h1> 
            <h4>{authUser.email}</h4>
            <SelectMenu>
              <h3 onClick={ChooseBank}>Choose Bank</h3>
              <h3 onClick={ChangePassword}>Change Password</h3>
              <h3 onClick={DeleteAccount}>Delete Account</h3>
            </SelectMenu>
   </Menu>
      
   <Show>
   {pageShownComponent()}
   </Show>
       </PageContainer> 

      </Account>
      </>
    )}
  </AuthUserContext.Consumer>
)};

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(AccountPage);
