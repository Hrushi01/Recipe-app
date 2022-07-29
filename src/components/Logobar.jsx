import React from "react";
import "./Logobar.css";
import { GiKnifeFork } from "react-icons/gi";
import { NavLink } from "react-router-dom";

export default function Logobar() {
  return (
    <>
      <div className="Logo-whole">
        <NavLink to={"/"} className="Logoo">
          <div className="Logo-left">
            <GiKnifeFork className="icon" />

            <h4> YUMMY🤤😋</h4>
          </div>
        </NavLink>
        <div className="Logo-right">
          <h3>You wanna make it!!!! We have the recipe...</h3>
        </div>
      </div>
    </>
  );
}
