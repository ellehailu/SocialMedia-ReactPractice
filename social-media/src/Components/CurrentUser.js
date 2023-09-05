import React from "react";
import PropTypes from "prop-types";

function CurrentUser() {
    const userName = "SuzSch";
    const numberOfTweets = 900;
    const following = 7000;
    const followers = 57000;

    return (
        <React.Fragment>
            <h3>@{userName}</h3>
            <h3>Tweets: {numberOfTweets}</h3>
            <h3>Following: {following}</h3>
            <h3>Followers: {followers}</h3>
        </React.Fragment>
    )
   
}

export default CurrentUser;