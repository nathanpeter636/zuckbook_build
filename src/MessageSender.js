import React from 'react'

import Avatar from "@material-ui/core/Avatar";

import "./MessageSender.css"

function MessageSender() {



    const handleSubmit = (e) => {
        e.preventDefault()
    }



    return (
        <div className="messageSender">
            <div className="messageSender__top">

            <Avatar/>
            
            
            <form action="">
            <input className="messageSender__input" type="text" placeholder="Who's opinion should we challenge today?"/>
            <input placeholder="image URL"/>


            <button onClick={handleSubmit}>  Hidden Submit </button>
            </form>
            
            </div>
            
            <div className="messageSender__bottom">

            </div>
            
        </div>
    )
}

export default MessageSender
