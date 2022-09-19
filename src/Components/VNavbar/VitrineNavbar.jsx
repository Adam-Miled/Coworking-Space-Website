import React from "react";
import "./VitrineNavbar.scss";
import { Link, NavLink } from "react-router-dom";
import log from "../../Assets/log.png";

const VitrineNavbar = ({ titre }) => {
  return (
    <div className={"vitrineNavbar " + titre}>
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img src={log} alt="logo" />
        </Link>
      </div>

      <div className="center">
        <NavLink
          to="/packs"
          style={{ textDecoration: "none" }}       >
          <h4>Services</h4>
        </NavLink>

        <NavLink to="/actualites" style={{ textDecoration: "none" }}  >
          <h5>Actualités</h5>
        </NavLink>

        <NavLink to="/about" style={{ textDecoration: "none" }} >
          <h5>A propos</h5>
        </NavLink>

        <NavLink to="/contact" style={{ textDecoration: "none" }}>
          <h5>Contact</h5>
        </NavLink>
      </div>

      <div className="right">
        <Link to="/login" style={{ textDecoration: "none" }}>
          <button className="buttonBlue">Se Connecter</button>
        </Link>
        <Link to="/signup" style={{ textDecoration: "none" }}>
          <button className="buttonRed">S'inscrire</button>
        </Link>
      </div>
    </div>
  );
};

export default VitrineNavbar;
