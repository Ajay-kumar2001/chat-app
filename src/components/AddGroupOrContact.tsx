import React, { useEffect, useState } from 'react';
import { IoPersonAddSharp } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import SearchBar from './searchBar';
import "../pages/pagesCss/chatPage.css";
import Contact from './Contact';

interface Contact {
  firstName: string;
  lastName: string;
  description: string;
}

const AddGroupOrContact = () => {
  const [contactList, setContactList] = useState<Contact[]>([]);

  useEffect(() => {
    const contacts = [
      { firstName: "Alice", lastName: "Johnson", description: "Never give up" },
      { firstName: "Bob", lastName: "Smith", description: "At home" },
      { firstName: "Charlie", lastName: "Brown", description: "At school" },
      { firstName: "Diana", lastName: "Prince", description: "At office" },
      { firstName: "Eve", lastName: "Adams", description: "Always ready to help" },
      { firstName: "Frank", lastName: "Miller", description: "On a mission" },
      { firstName: "Grace", lastName: "Lee", description: "Loves coding" },
      { firstName: "Henry", lastName: "Wilson", description: "Travel enthusiast" },
      { firstName: "Ivy", lastName: "Taylor", description: "Music lover" },
      { firstName: "Jack", lastName: "Davis", description: "Sports fanatic" },
    ];
    setContactList(contacts);
  }, []);

  return (
    <div className='chatBarAndSearch'>
      <div className='chatBar'>
        <div className='chat'>
          <div className='chatText'>New Chats</div>
        </div>
      </div>
      <SearchBar />
      <div className='filterTabs'>
        <Contact contactData={{ name: "New Group" }} />
        <Contact contactData={{ name: "New Community" }} />
      </div>
      <div className='contactList'>
        {contactList.map((contact, index) => (
          <Contact
            key={index}
            contactData={contact}
          />
        ))}
      </div>
    </div>
  );
};

export default AddGroupOrContact;
