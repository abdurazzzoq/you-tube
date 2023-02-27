import '../App.css'

import React from "react";
import youtube from "../image/you-tube.svg";
import camera from "../image/camera.svg";
import bell from "../image/bell.svg";
import dotMenu from "../image/dot-menu.svg";
import user from "../image/Userpic.svg"
import search from "../image/Search.svg"


function Header() {
  return (
    <div className="header py-5 flex justify-between">
      <div className="header-left flex gap-5">
      <button className="hamburger">
            <div className="bar"></div>
          </button>

        <img className='logo' src={youtube} alt="" />
        <input
          type="text"
          className="border-none bg-gray-100 rounded-2xl outline-none px-3 py-1 "
          style={{maxWidth:500 ,width:500}}
          name=""
          id="input"
          placeholder="search..."
        />

        <img id='search' className='hidden ' src={search} alt="" />
      </div>
      <div className="header-right ">
        <div className="flex md:gap-6 gap-9 sm:gap-4">
            <img className=' cursor-pointer' src={camera} alt="" />
            <img className=' cursor-pointer' src={dotMenu} alt="" />
            <img className=' cursor-pointer' src={bell} alt="" />
            <img className=' cursor-pointer' src={user} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
