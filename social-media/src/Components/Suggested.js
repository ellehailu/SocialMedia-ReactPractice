import React from "react";
import UserInfo from "./UserInfo";
import userEvent from "@testing-library/user-event";

const sampleUserList = [

{
    userName : 'John'
},

{
    userName : 'Beth'
},

{
    userName : 'Jane'
},

{
    userName : 'Bill'
},
];

function Suggested(){
    return(
        <React.Fragment>
            <hr/>
            <h2>Suggested users</h2>
            {sampleUserList.map((user, index) => 
            <UserInfo
            userName={user.userName}
            key={index}/>
            )}
           
        </React.Fragment>
        // pulls user name and photo from userInfo 
    );
}

export default Suggested;

