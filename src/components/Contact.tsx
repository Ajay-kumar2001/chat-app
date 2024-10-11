import React from 'react';
import "../css/contact.css";
import { Contacts } from '../interfaces/contact.interface';
import { useContactContext } from '../store/ContactInfo';

interface ContactProps {
  contactData: Contacts;
}

const Contact: React.FC<ContactProps> = ({ contactData }) => {
  const { currentContact, setCurrentContact } = useContactContext();

  return (
    <div className='contactNew' onClick={() => setCurrentContact({ ...currentContact, ...contactData })}>
      <img className='image' src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg" alt={`${contactData.firstName} ${contactData.lastName}`} />
      <div className='contactInfo'>
        <div className='contactText'>
          <div className='contactName'>{`${contactData.firstName} ${contactData.lastName}`}</div>
        {contactData.description?<div className='recentMessage'>${contactData.description}</div>:<div>Recent message</div>}  
        </div>
        <div className='messageTime'>4:30</div>
      </div>
    </div>
  );
}

export default Contact;
