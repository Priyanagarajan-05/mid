import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import websocketService from "./websocketService";
import { fetchMessageHistory } from "./messageService";

const ChatWidget = ({userid , policeId , onClose}) => {
  const location = useLocation();
  const navigate = useNavigate();
  // const { userid, policeId } = location.state || {};

  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [lastEvaluatedKey, setLastEvaluatedKey] = useState(null);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (!userid || !policeId) {
      alert("Missing user or police information.");
      navigate(-1);
      return;
    }

    const loadHistory = async () => {
      const { messages: history, lastEvaluatedKey: newKey } = await fetchMessageHistory(
        userid,
        policeId,
        lastEvaluatedKey
      );

      const parsedHistory = history.map((msg) => ({
        ...msg,
        isSent: msg.senderId === userid,
      }));

      setMessages((prevMessages) => [...parsedHistory, ...prevMessages]);
      setLastEvaluatedKey(newKey);
      scrollToBottom();
    };

    loadHistory();

    websocketService.connect(userid, (message) => {
      const updatedMessage = {
        ...message,
        isSent: message.senderId === userid,
      };
      setMessages((prevMessages) => [...prevMessages, updatedMessage]);
      scrollToBottom();
    });

    return () => websocketService.close();
  }, [userid, policeId]);

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      const messageData = {
        action: "sendMessage",
        senderId: userid,
        receiverId: policeId,
        content: inputMessage,
        timestamp: new Date().toISOString(),
        read: false,
      };

      websocketService.sendMessage(messageData);
      setMessages((prevMessages) => [
        ...prevMessages,
        { ...messageData, isSent: true, read: false },
      ]);
      setInputMessage("");
      scrollToBottom();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const scrollToBottom = () => {
    chatContainerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
  style={{
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "100%",
    maxWidth: "400px",
    height: "500px",
    backgroundColor: "#F9F9F9", // Soft light background
    borderRadius: "30px", // More rounded corners
    boxShadow: "0px 6px 18px rgba(0, 0, 0, 0.1)", // Soft shadow for a gentle floating effect
    display: "flex",
    flexDirection: "column",
    fontFamily: "'Arial', sans-serif",
    color: "#2C3E50", // Calm dark blue text color
  }}
>
  {/* Header */}
  <div
    style={{
      padding: "15px 20px",
      background: "linear-gradient(90deg, #6DD5FA, #2980B9)", // Soft blue gradient
      color: "#fff",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderRadius: "30px 30px 0 0",
      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)", // Gentle shadow for the header
    }}
  >
    <span style={{ fontWeight: "bold", fontSize: "18px", color: "#fff" }}>Support Chat</span>
    <button
      style={{
        background: "transparent",
        border: "none",
        color: "#fff",
        cursor: "pointer",
        fontSize: "18px",
      }}
      onClick={() => onClose()}
    >
      ✖
    </button>
  </div>

  {/* Chat Messages */}
  <div
    style={{
      flex: 1,
      overflowY: "auto",
      padding: "15px",
      backgroundColor: "#F9F9F9", // Soft light background
    }}
  >
    {messages.map((msg, index) => (
      <div
        key={index}
        style={{
          display: "flex",
          justifyContent: msg.isSent ? "flex-end" : "flex-start",
          margin: "10px 0",
        }}
      >
        <div
          style={{
            maxWidth: "75%",
            padding: "12px 18px",
            borderRadius: "25px",
            backgroundColor: msg.isSent ? "#B2EBF2" : "#E1F5FE", // Soothing light blue for sent and received
            color: "#2C3E50", // Dark text for readability
            wordWrap: "break-word",
            fontSize: "14px",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)", // Soft shadow for message bubbles
          }}
        >
          <div>{msg.content}</div>
          <div
            style={{
              fontSize: "0.75em",
              color: "#7F8C8D", // Light grey for timestamps
              textAlign: "right",
              marginTop: "5px",
            }}
          >
            {new Date(msg.timestamp).toLocaleTimeString()}
          </div>
        </div>
      </div>
    ))}
    <div ref={chatContainerRef} />
  </div>

  {/* Input Box */}
  <div
    style={{
      display: "flex",
      padding: "15px",
      backgroundColor: "#fff",
      borderTop: "1px solid #BDC3C7",
      borderRadius: "0 0 30px 30px", // Rounded bottom corners
    }}
  >
    <input
      type="text"
      value={inputMessage}
      onChange={(e) => setInputMessage(e.target.value)}
      onKeyDown={handleKeyPress}
      placeholder="Type a message"
      style={{
        flex: 1,
        padding: "12px 18px",
        border: "none",
        borderRadius: "25px",
        outline: "none",
        fontSize: "14px",
        marginRight: "15px",
        backgroundColor: "#ECF0F1", // Soft input background
        color: "#2C3E50", // Dark text color for readability
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)", // Light shadow effect
      }}
    />
    <button
      onClick={handleSendMessage}
      style={{
        padding: "12px 18px",
        backgroundColor: "#2980B9", // Soft blue send button
        color: "#fff",
        border: "none",
        borderRadius: "50%",
        cursor: "pointer",
        fontSize: "18px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      ➤
    </button>
  </div>
</div>

  );
};

export default ChatWidget;
