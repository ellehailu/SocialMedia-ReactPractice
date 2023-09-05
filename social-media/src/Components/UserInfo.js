import React from "react";
import PropTypes from "prop-types";

function UserInfo(props){
   
    return (
       <React.Fragment>
        <h3>{props.userName}</h3>
        <h3>{props.numberOfTweets}</h3>
        <h3>{props.followers}</h3>
        <h3>{props.following}</h3>
        <p>{props.userBio}</p>
       </React.Fragment>
    );
}

UserInfo.propTypes = {
    userName: PropTypes.number,
    tweets: PropTypes.number,
    followers: PropTypes.number,
    following: PropTypes.number
};

export default UserInfo;