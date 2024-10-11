import React from 'react'
import { IoPersonAddSharp } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import SearchBar from './searchBar';
import "../pages/pagesCss/chatPage.css"

const chatBar = () => {
  return (
    <div className='chatBarAndSearch'>
      <div className='chatBar'>
        <div className='chat'>
          <div className='chatText'>   </div>
        </div>
        <div className='chatSetting'>
          <div className='addContact'><IoPersonAddSharp className='iconSize' /></div>
          <div className='settings'><BsThreeDotsVertical className='iconSize' /></div>
        </div>
      </div>
      <SearchBar />
      <div className='filterTabs'>
        <div className='tab'>All</div>
        <div className='tab'>Unread</div>
        <div className='tab'>Groups</div>
      </div>
    </div>
  )
}

export default chatBar;
