import React, { useState } from 'react';
import './Chatbot.css';
import { MessageSquare, X, Send } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I help you today?', sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, sender: 'user' }]);
      setInputValue('');
      // Placeholder for bot response
      setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, { text: 'This is a placeholder response.', sender: 'bot' }]);
      }, 1000);
    }
  };

  return (
    <div className="chatbot-container">
      <div className={`chatbot-window ${isOpen ? 'open' : ''}`}>
        <div className="chatbot-header">
          <h3>Chat with us</h3>
          <button onClick={toggleChatbot}><X size={20} /></button>
        </div>
        <div className="chatbot-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`chat-message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <div className="chatbot-input">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Type a message..."
          />
          <button onClick={handleSendMessage}><Send size={20} /></button>
        </div>
      </div>
      <button className="chatbot-toggle-button" onClick={toggleChatbot}>
        <MessageSquare size={24} />
      </button>
    </div>
  );
};

export default Chatbot;
