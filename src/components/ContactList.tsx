import Contact from "./Contact";
import { useState,useEffect } from "react";
import { Contacts } from "../interfaces/contact.interface";
import ChatBar from "./chatBar";
function ContactList() {
  const [contacts, setContacts] = useState<Contacts[]>([]);
  useEffect(():void=>{
    // api call for getting All contacts
    const contactList= [
      {
        firstName: "John",
        lastName: "Doe",
        id: 1,
        image: "john.jpg",
        roomId: "room1"
      },
      {
        firstName: "Jane",
        lastName: "Smith",
        id: 2,
        image: "jane.jpg",
        roomId: "room2"
      },
      {
        firstName: "Michael",
        lastName: "Johnson",
        id: 3,
        image: "michael.jpg",
        roomId: "room3"
      },
      {
        firstName: "Emily",
        lastName: "Davis",
        id: 4,
        image: "emily.jpg",
        roomId: "room4"
      },
      {
        firstName: "Christopher",
        lastName: "Wilson",
        id: 5,
        image: "christopher.jpg",
        roomId: "room5"
      },
      {
        firstName: "Emma",
        lastName: "Martinez",
        id: 6,
        image: "emma.jpg",
        roomId: "room6"
      },
      {
        firstName: "Daniel",
        lastName: "Anderson",
        id: 7,
        image: "daniel.jpg",
        roomId: "room7"
      },
      {
        firstName: "Olivia",
        lastName: "Taylor",
        id: 8,
        image: "olivia.jpg",
        roomId: "room8"
      },
      {
        firstName: "Matthew",
        lastName: "Thomas",
        id: 9,
        image: "matthew.jpg",
        roomId: "room9"
      },
      {
        firstName: "Sophia",
        lastName: "Harris",
        id: 10,
        image: "sophia.jpg",
        roomId: "room10"
      }
    ];
    
    setContacts([...contacts,...contactList]);
  },[])
  return (

    <div className="contactList">
        {contacts?.map((contact)=><Contact contactData={contact}/>)}
    </div>
    
  );
}

export default ContactList;