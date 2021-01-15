import React, {useState} from "react";
import SearchIcon from "@material-ui/icons/Search";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import FlagOutlinedIcon from "@material-ui/icons/FlagOutlined";
import Avatar from "@material-ui/core/Avatar";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ForumIcon from '@material-ui/icons/Forum';

import {useStateValue} from "./StateProvider"


import "./Header.css";




function Header() {

  const [{ user }, dispatch] = useStateValue();


  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
          alt="logo"
        />

        <div className="header__input">
          <SearchIcon  />
          <input type="text" placeholder="Search Zuckbook"></input>
        </div>
      </div>
      <div className="header__center">
        <div className="header__option header__option--active ">
          <HomeOutlinedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <FlagOutlinedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SubscriptionsOutlinedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <StorefrontOutlinedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar src={user.photoURL}/>

          <h4>{user.displayName}</h4> </div>

          <IconButton>
              <AddIcon/>
          </IconButton>

          <IconButton>
              <ForumIcon/>
          </IconButton>

          <IconButton>
              <NotificationsActiveIcon/>
          </IconButton>

          <IconButton>
              <ExpandMoreIcon/>
          </IconButton>
      </div>
    </div>
  );
}

export default Header;
