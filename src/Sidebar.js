import React from "react";

import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
// import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PanToolIcon from '@material-ui/icons/PanTool';
import DoneIcon from '@material-ui/icons/Done';
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import GpsFixedIcon from '@material-ui/icons/GpsFixed';
import ChangeHistoryIcon from '@material-ui/icons/ChangeHistory';
import FolderIcon from '@material-ui/icons/Folder';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
// import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";

import {useStateValue} from "./StateProvider"
// const [{ user }, dispatch] = useStateValue();

export default function Sidebar() {

  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="sidebar">
      <SidebarRow
        src={user.photoURL}
        title={user.displayName}
      />

      <SidebarRow Icon={PanToolIcon} title="Censorship" />
      <SidebarRow Icon={DirectionsWalkIcon} title="Enemies" />
      <SidebarRow Icon={ChangeHistoryIcon} title="Fact Check" />
      <SidebarRow Icon={FolderIcon} title="Blacklist " />
      <SidebarRow Icon={GpsFixedIcon} title="Tracking" />
    </div>
  );
}
