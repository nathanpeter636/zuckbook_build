import React, {useState} from 'react'

import Avatar from "@material-ui/core/Avatar";

import "./MessageSender.css"

import VideocamIcon from '@material-ui/icons/Videocam';

import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';

import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

function MessageSender() {

    const [input, setInput] = useState('');


    const [image, setImageUrl] = useState('');

    


    const handleSubmit = (e) => {
        e.preventDefault()

        setInput('');
        setImageUrl('');
    }

   

    



    return (
        <div className="messageSender">
            <div className="messageSender__top">

            <Avatar/>
            
            
            <form action="">
            <input value={input} onChange={(e) => setInput(e.target.value)} className="messageSender__input" type="text" placeholder="Who should we ban today?"/>
            <input value={image} onChange={(e) => setImageUrl(e.target.value)}placeholder="image URL"/>


            <button onClick={handleSubmit}>  Hidden Submit </button>
            </form>
            
            </div>
            
            <div className="messageSender__bottom">

                <div className="messageSender__options">

                        <VideocamIcon style={{color: 'red'}}/>

                        <h3>Live Video</h3>

                </div>

                <div className="messageSender__options">

                    <PhotoLibraryIcon style={{color: 'limegreen'}}/>

                    <h3>Photo/Video</h3>
                    
                </div>

                <div className="messageSender__options">

                    <InsertEmoticonIcon style={{color: "gold"}}/>
                    
                    <h3>Feeling/Activity</h3>
                   
                    
                </div>



            </div>
            
        </div>
    )
}

export default MessageSender
