import React from "react";
import "./Sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import GroupIcon from '@mui/icons-material/Group';
import DescriptionIcon from '@mui/icons-material/Description';
import InventoryIcon from '@mui/icons-material/Inventory';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import { Link } from "react-router-dom"
import log from "../../Assets/log.png"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
       <Link to="/" style={{textDecoration: "none"}}> 
        <span className="logo">
     <img src={log} alt="logo" />
            </span>
            </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
<p className="title"> GESTIONNAIRE</p>

          <li>
            <DashboardIcon className="icon"  />
            <a href="/home">
            <span>Tableau de bord</span>
            </a>
          </li>
          <p className="title"> VISIONNAIRE</p>


          <Link to="/users" style={{textDecoration: "none"}}>
          <li>
            <GroupIcon className="icon"  />
            <span>Utilisateurs</span>
          </li>
          </Link>

          <Link to="/services" style={{textDecoration: "none"}}> 
          <li>
            <DesignServicesIcon className="icon"  />
            <span>Services</span>
          </li>
          </Link>

          <Link to="/stock" style={{textDecoration: "none"}}> 
          <li>
<InventoryIcon className="icon"  />
            <span>Stocks</span>
          </li>
          </Link>
          <Link to="/invoices" style={{textDecoration: "none"}}> 
          <p className="title"> UTILE</p>
          <li>
<DescriptionIcon className="icon"  />
            <span>Factures</span>
          </li>
          </Link>

          <li>
<EqualizerIcon className="icon"  />
            <span>Statistiques</span>
          </li>
        


          <p className="title">ADMINISTRATION</p>

          <li>
            <SettingsIcon className="icon" />
            <span>Paramètres</span>
          </li>

         
          <Link to="/login" style={{textDecoration: "none"}}>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Se déconnecter</span>
          </li>
</Link>
        </ul>
      </div>
{/*

      <div className="bottom">
        <div className="coloroption"></div>
        <div className="coloroption"></div>
      </div>
      */}
    </div>
  );
};

export default Sidebar;
