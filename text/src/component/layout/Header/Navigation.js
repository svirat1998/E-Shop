import React from 'react'
import "./navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    // <div className='StartMenu'>
    //   <ul>
    //     <li> Men
    //       <div className="subMenu">
    //            <div class="submenuList">

    //            </div>
    //       </div>
    //     </li>
    //     <li> Women
    //       <div className="subMenu">
    //            <div className="submenuList"></div>
    //       </div>
    //     </li>
    //     <li> Kids
    //       <div className="subMenu">
    //            <div className="submenuList"></div>
    //       </div>
    //     </li>
    //     <li> Bags & Footware
    //       <div className="subMenu">
    //            <div className="submenuList"></div>
    //       </div>
    //     </li>
    //     <li> Mobile
    //       <div className="subMenu">
    //            <div className="submenuList"></div>
    //       </div>
    //     </li>
    //   </ul>
    // </div>

         <div className='StartMenu'>
      <ul>
        <li> <Link to="/men">Men</Link> 
          <div className="subMenu">
               <div className="submenuList">

               </div>
          </div>
        </li>
        <li> <Link to="/women">Women</Link>
          <div className="subMenu">
               <div className="submenuList"></div>
          </div>
        </li>
        <li> <Link to="/kids">Kids</Link>
          <div className="subMenu">
               <div className="submenuList"></div>
          </div>
        </li>
        <li> <Link to="/bag & Footware">Bags & Footware</Link> 
          <div className="subMenu">
               <div className="submenuList"></div>
          </div>
        </li>
        <li> <Link to="/mobile">Mobile</Link>
          <div className="subMenu">
               <div className="submenuList"></div>
          </div>
        </li>
      </ul>
    </div> 
  )
}

export default Navigation
