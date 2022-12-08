import React from "react";
import "./Logobar.css";
import { GiKnifeFork } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import Catogory from "./Catogory";

export default function Logobar() {
  return (
    <>
      <div className="Logo-whole">
        <NavLink to={"/"} className="Logoo">
          <div className="Logo-left">
            {/* <GiKnifeFork className="icon" /> */}

            <h4> DinnerTales</h4>
          </div>
        </NavLink>
        <div className="Logo-right">
          <Catogory />
        </div>
      </div>
    </>
  );
}
