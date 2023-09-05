import React from "react";
import Tweet from "./Tweet";

const sampleTweetList = [

{
    userName : 'Elle',
    userTweet: 'What the heck!'
},

{
    userName : 'Suzanne',
    userTweet: 'No way!'
},

{
    userName : 'Jason',
    userTweet : 'What\'s up with that?'
}
];

function TweetList() {
    return(
        <React.Fragment>
        {sampleTweetList.map((tweet, index) => 
        <Tweet 
        userName={tweet.userName}
        userTweet={tweet.userTweet}
        key={index}/>
        )}
        </React.Fragment>
    );
}
export default TweetList;