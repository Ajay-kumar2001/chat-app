import React from "react";
import { MdChat } from "react-icons/md";
import { MdOutlineGroups } from "react-icons/md";
import { FaRegStar } from "react-icons/fa6";
import { IoRemoveOutline } from "react-icons/io5";
import { MdOutlineArchive } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import "../css/sideBarCom.css";

const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="topSideBar">
        <div className="iconsSize" title="Chat">
          <MdChat />
        </div>
        <div className="iconsSize" title="Groups">
          <MdOutlineGroups />
        </div>
        <div className="iconsSize" title="Star">
          <FaRegStar />
        </div>
        <div className="iconsSize" title="Remove">
          <IoRemoveOutline />
        </div>
        <div className="iconsSize" title="Archive">
          <MdOutlineArchive />
        </div>
      </div>
      <div className="sideBarBottom">
        <div className="iconsSize" title="Settings">
          <IoSettingsOutline />
        </div>
        <div className="image1" title="Profile">
          <img src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg" alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;