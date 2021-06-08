import React from 'react';
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post 
              profilePic="./micky.jpg"
              message="wow cool!"
              timeStamp="This is a timestamp"
              username="Micky Mac"
              image="./background5.jpg"/>
            <Post />
            <Post />
        </div>
    )
}

export default Feed; 
