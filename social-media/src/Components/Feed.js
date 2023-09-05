import React from "react";
import NewTweet from "./NewTweet";
import TweetList from "./TweetList";

function Feed(){
    return (
        <React.Fragment>
            
            <NewTweet/>
            <TweetList/>
        </React.Fragment>
    );
}

export default Feed;