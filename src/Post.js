import React from 'react'


import Avatar from "@material-ui/core/Avatar";


import "./Post.css"

function Post({profilePic, image, username, timestamp, message}) {
    return (
        <div className="post">
            
<div className="posts__top">
            <Avatar src={profilePic}/>

            <div className="post__topInfo">

            <h3>{username}</h3>

            <p>Timestamp...</p>


            </div>


            </div>
        </div>
    )
}

export default Post
