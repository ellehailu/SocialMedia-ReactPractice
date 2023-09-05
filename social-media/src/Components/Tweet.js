import React from "react";
import PropTypes from "prop-types";

function Tweet(props) {
    
    return(
        <React.Fragment>
            <hr/>
            <h4>{props.userName}</h4>
            <h4>{props.userTweet}</h4>
        </React.Fragment>
        );
}

Tweet.propTypes = {
    userName: PropTypes.string,
    userTweet: PropTypes.string
};

export default Tweet;