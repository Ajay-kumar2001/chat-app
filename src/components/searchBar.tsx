import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { MdFilterList } from "react-icons/md";
import "../pages/pagesCss/chatPage.css"

const SearchBar = () => {
  return (
    <div className='searchCom'>
      <div className='searchBar'>
        <IoIosSearch className='iconSize searchIcon' />
        <input className='searchField' type="text" placeholder='Search' />
      </div>
      <MdFilterList className='iconSize' />
    </div>
  )
}

export default SearchBar;
