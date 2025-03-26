import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const maxLength = 60;

  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  return (
    <div className="App">
      {showSuccess ? (
        <p className="message-success">Thanks for the update!</p>
      ) : (
        <div className="status-update">
          <h1>Super Short Status!</h1>
          <p>Tell us how you are doing in 60 characters or less!</p>
          <form onSubmit={handleSubmit}>
            <textarea
              className={message.length > maxLength ? "too-long" : ""}
              placeholder="What's good?"
              value={message}
              onChange={handleOnChange}
            />
            <button
              disabled={message.length > maxLength || message.length < 1}
              type="submit"
            >
              Tell the world!
            </button>
          </form>
          <p className={message.length > maxLength && "over-limit"}>
            {message.length} / {maxLength}
          </p>
        </div>
      )}
    </div>
  );
}
