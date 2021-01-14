import React from "react";

import Avatar from "@material-ui/core/Avatar";

import NotInterestedIcon from "@material-ui/icons/NotInterested";

import ReportProblemSharpIcon from "@material-ui/icons/ReportProblemSharp";

import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";

import "./Post.css";

import db from "./firebase";

const getLikes = (likes) => {
  if (likes >= 1000 * 1000) return `${likes / (1000 * 1000)}M`;
  else if (likes >= 1000) return `${likes / 1000}K`;
  return likes > 0 ? likes : null;
};

export default function Post({
  profilePic,
  image,
  username,
  timestamp,
  message,
  likes,
  id,
}) {
  const handleLike = () => {
    db.collection("posts")
      .update({
        likes: likes + 1,
      });

      console.log('clicked')
  };

  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />

        <div className="post__topInfo">
          <h3>{username}</h3>

          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>

      <div className="post__bottom">
        <p>{message}</p>
      </div>

      <div className="post__image">
        <img src={image} alt="" />
      </div>

      <div className="post__options">
        <div className="post__option" onClick={handleLike}>
          <span>{getLikes(likes)}</span>
          <NotInterestedIcon />

          <p>Ban</p>
        </div>

        <div className="post__option">
          <ChatBubbleOutlineOutlinedIcon />
          <p>Comment</p>
        </div>

     
      </div>
    </div>
  );
}

// export default Post;
