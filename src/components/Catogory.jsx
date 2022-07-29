import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import './Catogory.css'

export default function Catogory() {
  return <div className="List">
      <NavLink className="Navlink" to={'/cuisine/Italian'} >
          <FaPizzaSlice/>
          <h4>Italian</h4>
      </NavLink>
        <NavLink className="Navlink" to={'/cuisine/American'}>
          <FaHamburger/>
          <h4>American</h4>
      </NavLink> 
       <NavLink className="Navlink"  to={'/cuisine/Thai'}>
          <GiNoodles/>

          <h4>Thai</h4>
      </NavLink>
      
        <NavLink className="Navlink" to={'/cuisine/Japanese'}>
          <GiChopsticks/>
          <h4>Japanese</h4>
      </NavLink>
  </div>;
}
