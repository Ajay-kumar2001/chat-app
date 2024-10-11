import React from 'react';
import { FaVideo, FaSearch, FaEllipsisV } from 'react-icons/fa';
import '../css/profileBar.css';
import { useContactContext } from '../store/ContactInfo';

function ProfileBar() {
  const { currentContact } = useContactContext();
  return (
    <div className='profileContainer'>
      <div className='profileDetails'>
        <img
          className='profileImage'
          src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg"
          alt="profile"
        />
        <div className='contactName'>{`${currentContact?.firstName} ${currentContact?.lastName}`}</div>
      </div>
      <div className='profileActions'>
        <FaVideo className='profileIcon' title="Video Call" />
        <FaSearch className='profileIcon' title="Search" />
        <FaEllipsisV className='profileIcon' title="More Options" />
      </div>
    </div>
  );
}

export default ProfileBar;
