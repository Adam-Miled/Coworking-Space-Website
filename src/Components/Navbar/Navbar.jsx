import React from "react";
import "./Navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import NotificationsIcon from "@mui/icons-material/Notifications";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ListIcon from "@mui/icons-material/List";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Rechercher..." />
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
            <DarkModeIcon  className="icon"  />
          </div>
          <div className="item">
            <FullscreenExitIcon  className="icon"  />
          </div>
          <div className="item">
            <NotificationsIcon  className="icon"  />
<div className="counter">4</div>

          </div>
          <div className="item">
            <ChatBubbleOutlineIcon  className="icon"  />
            <div className="counter">1</div>
          </div>
          <div className="item">
        
            <ListIcon  className="icon"  />
          </div>

<div className="item">
  <img src="https://i.pinimg.com/736x/e7/29/06/e7290657583ab25cc13524bd1e5a444c.jpg" alt="profile"  className="avatar"/>
  
  </div>          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
