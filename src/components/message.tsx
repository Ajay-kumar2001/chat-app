import React from 'react';
import "../css/message.css";

interface MessageProps {
  message: string;
  isUser: boolean;
  timestamp: number;
  sent?: boolean; // New prop for message status
}

const Message: React.FC<MessageProps> = ({ message, isUser, timestamp, sent }) => {
  return (
    <div className={`message-container ${isUser ? 'user' : 'contact'}`}>
      <div className="message">
        {message}
        {sent && <span className="tick">&#10004;</span>}
        <span className="timestamp">{timestamp}</span>
      </div>
    </div>
  );
}

export default Message;
