import React, { ChangeEvent, useState, useRef, useEffect, KeyboardEvent } from 'react';
import ProfileBar from './profileBar';
import "../pages/pagesCss/chatPage.css";
import { FaRegSmile } from 'react-icons/fa';
import { IoAdd } from 'react-icons/io5';
import { FaMicrophone } from 'react-icons/fa';
import { IoSend } from 'react-icons/io5';
import Message from './message';

function ChatBox() {
  const [messages, setMessages] = useState<string[]>([]);
  const [message, setMessage] = useState("");

  const chatBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Auto-scroll to bottom on messages change
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    if (message.trim() !== "") { // Trim message to avoid sending empty messages
      setMessages([...messages, message]);
      setMessage(""); // Clear the input field
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // Prevent default behavior (form submission)
      sendMessage();
    } else if (e.key === 'Enter' && e.shiftKey) {
      // Insert newline in the input value
      setMessage(message + '\n');
    }
  };

  return (
    <div className="chatContainer">
      <ProfileBar />
      <div className='chatBox' ref={chatBoxRef}>
        {messages.map((msg, index) => (
          <Message key={index} message={msg} isUser={index % 2 === 0} timestamp={12356987}  sent={true}/>
        ))}
      </div>
      <div className="message-input-container">
        <div className="left-icons">
          <FaRegSmile className="icon" />
          <IoAdd className="icon" />
        </div>
        <input
          type="text"
          placeholder="Type a message"
          className="message-input"
          value={message}
          onChange={changeHandler}
          onKeyDown={handleKeyPress}
        />
        <div className="right-icon" onClick={sendMessage}>
          <IoSend className="icon" />
        </div>
        <div className="right-icon">
          <FaMicrophone className="icon" />
        </div>
      </div>
    </div>
  );
}

export default ChatBox;
