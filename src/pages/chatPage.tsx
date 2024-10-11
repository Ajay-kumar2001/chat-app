import React from 'react';
import ContactList from '../components/ContactList';
import ChatBox from '../components/chatBox';
import "./pagesCss/chatPage.css";
import { useContactContext } from '../store/ContactInfo';
import ChatBar from '../components/chatBar';
import SideBar from '../components/sideBar';
import AddGroupOrContact from '../components/AddGroupOrContact';

function ChatPage() {
    const { currentContact } = useContactContext();
    return (
        <div className="chatPage">
            <SideBar />
            <div className='chatList'>
                <ChatBar />
                <ContactList />
                {/* <AddGroupOrContact/> */}
            </div>
            <ChatBox />
        </div>
    );
}

export default ChatPage;
