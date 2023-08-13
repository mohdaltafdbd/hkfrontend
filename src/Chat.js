import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8080");

function Chat() {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on("chat_message", (messageObj) => {
      setChat((prevChat) => [...prevChat, messageObj]);
    });
  }, []);

  const sendMessage = () => {
    if (message) {
      socket.emit("chat_message", message);
      setMessage("");
    }
  };

  return (
    <div className="App">
      <div className="chat-container">
        <div className="chat">
          {chat.map((message, index) => (
            <div key={index} dangerouslySetInnerHTML={{ __html: message }} />
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
