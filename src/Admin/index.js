import React from 'react'
import styled from 'styled-components';

const Header = styled.header`
padding: 20px;
display: flex;
align-items: center; 
margin: 0 auto;

background-color: #053d57;

h1{
    color: #f2f1ef; 
font-size: 30px;
}
`;

const Body = styled.div`
background-color: #97bcc7;
`;

const PageContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
flex-wrap: wrap;
justify-content: space-around;

h1 { 
     color:white;
}
`;

const Container = styled.div`
margin: 20px;
width: 75%;
height: 400px;
background-color: #f2f1ef;
color: black;
box-shadow: 1px 3px 5px rgba(0,0,0,0.5);


h2 {
     text-align: center;
}
`;

const Div = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around
border-bottom: 2px solid #97bcc7;
box-shadow: 1px 3px 5px rgba(0,0,0,0.5);

span {
     padding: 20px;
     color: black;
     width: 30%;
     font-weight: bold;
}
`;

const Members = styled.div`
/* display: flex;
flex-direction: column;
justify-content: space-around; */

ul {
     list-style: none;
     padding-inline-start: 20px;
}

li {
     width: 100%
     display: flex;
     justify-content: space-around;
     flex-direction: column;
}

button {
     color: white;
     background-color: #006884;
     border-radius: 4px;
     border: none;
     padding: 3px;
&:hover{
     cursor: pointer;
     text-decoration: underline;
}

}

span { 
     width: 30px;
}
`;

function AdminPage() {
     const members = [
          { firstname: 'Emma', lastname: 'Lilja', email: 'lilja.emma@hotmail.com', id: 1 },
          { firstname: 'Emms', lastname: 'Liljan', email: 'lilja.emma@hotmail.com', id: 2 },    
     ]
     return (
          <>
          <Header>
                     <h1>Admin Dashboard</h1>
            </Header>
            <Body>
            <PageContainer>
                 <h1>User Management</h1>
<Container>
     <h2>Members</h2>
     <Div>
<span>FIRSTNAME:</span>
<span>LASTNAME:</span>
<span>EMAIL:</span>
<span>ROLE:</span>
     </Div>
<Members>

{members.map((member, index) => (
    <ul> 
         <li>
                                <span>{members[index].firstname}</span>
                                <span>{members[index].lastname}</span>
                                <span>{members[index].email}</span>
                                <button>Delete</button>                   
                            </li>
                        </ul>
))}

</Members>
</Container>

<Container>
     <h2>User details</h2>
</Container>

<Container>
     <h2>Statistics</h2>
</Container>

            </PageContainer>
          </Body>
          </>
     )
}

export default AdminPage;
