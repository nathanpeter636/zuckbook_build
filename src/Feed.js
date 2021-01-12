import React from 'react'

import "./Feed.css"
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'



function Feed() {
    return (
        <div className="feed">
            <StoryReel/>

            <div className="feedInner__container">
            <MessageSender/>

            <Post profilePic='https://www.thenation.com/wp-content/uploads/2020/09/zuckerberg-testify-ap-img.jpg'
            
            image='https://www.thenation.com/wp-content/uploads/2020/09/zuckerberg-testify-ap-img.jpg'

            username='Mark ZUCK'

            timestamp='this is a timestamp'


            message='Welcome to ZUCK World'
            
            
            
            
            />
            <Post/>
            <Post/>

            </div>
        </div>
    )
}

export default Feed
