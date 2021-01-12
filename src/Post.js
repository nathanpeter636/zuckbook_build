import React from "react";

import Avatar from "@material-ui/core/Avatar";

import NotInterestedIcon from '@material-ui/icons/NotInterested';

import ReportProblemSharpIcon from '@material-ui/icons/ReportProblemSharp';

import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';

import "./Post.css";

function Post({ profilePic, image, username, timestamp, message }) {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />

        <div className="post__topInfo">
          <h3>{username}</h3>

          <p>{timestamp}</p>
        </div>
        </div>


        <div className="post__bottom">
          <p>{message}</p>
        </div>

        <div className="post__image">
          <img src={image} alt="post_image" />
        </div>
      

      <dov className="post__options">
        <div className="post__option">

          <NotInterestedIcon/>

          <p>Ban</p>

        </div>

        <div className="post__option">

          <ChatBubbleOutlineOutlinedIcon/>
          <p>Comment</p>

          

        </div>

        <div className="post__option">

          <ReportProblemSharpIcon/>
          <p>Report</p>

          

        </div>
      </dov>
    </div>
  );
}

export default Post;
