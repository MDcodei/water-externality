import React, { useState } from "react";
import { Send, User, Bot } from "lucide-react";
import "./chatgpt.css";

const ChatGPT = () => {
    const [messages, setMessages] = useState([
        { sender: "bot", text: "Hello! How can I assist you today?" }
    ]);

    return (
        <div className="ui">
            <header className="header">ChatGPT</header>
            
            <div className="chat-container">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender}-message`}>
                        {msg.sender === "user" ? <User size={16} /> : <Bot size={16} />}
                        <span>{msg.text}</span>
                    </div>
                ))}
            </div>
            <div className="input-container">
                <input type="text" placeholder="Type a message..." className="input-box" />
                <button className="send-button">
                    <Send size={20} />
                </button>
            </div>
        </div>
    );
};

export default ChatGPT;