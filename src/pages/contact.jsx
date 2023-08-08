import React, { useState } from "react";
import "../styling/ContactPage.css";

const ContactPage = () => {
  const [message, setMessage] = useState("");
  const maxWordCount = 200;

  const handleMessageChange = (event) => {
    const { value } = event.target;
    setMessage(value);
  };

  const countWords = (text) => {
    const words = text.trim().split(/\s+/);
    return words.length;
  };

  const wordCount = message.trim() === "" ? 0 : countWords(message);

  return (
    <div className="container">
      <h1>Contact</h1>
      <form>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={handleMessageChange}
          ></textarea>
          <p className="word-count">
            {wordCount}/{maxWordCount} words
          </p>
        </div>
        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
