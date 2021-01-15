import React, {useState} from 'react'

import Avatar from "@material-ui/core/Avatar";

import "./MessageSender.css"

import VideocamIcon from '@material-ui/icons/Videocam';

import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';

import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

import {useStateValue} from "./StateProvider"

import firebase from "firebase"

import db from "./firebase"

// import * as firebase from 'firebase';



function MessageSender( profilePic) {

    const [{ user }, dispatch] = useStateValue();

    const [input, setInput] = useState('');


    const [image, setImageUrl] = useState('');

    // var docRef = db.collection('posts')

    // var updateTimestamp = docRef.update({
    //     timestamp: firebase.firestore.FieldValue.serverTimestamp()
    // });

  
    const handleSubmit = (e) => {
        e.preventDefault();
        
    

        db.collection('posts').add({
          message: input,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          profilePic: user.photoURL,
          username: user.displayName,
          image: image,
          likes: 0,
        })
    
        setInput('');
        setImageUrl('');
      };

   

    



    return (
        <div className="messageSender">
            <div className="messageSender__top">

            <Avatar src={user.photoURL}/>
            
            
            <form action="">
            <input value={input} onChange={(e) => setInput(e.target.value)} className="messageSender__input" type="text" placeholder={`Who should we ban today, ${user.displayName} ?`}/>
            <input className="img__input" value={image} onChange={(e) => setImageUrl(e.target.value)}placeholder="image URL"/>


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
