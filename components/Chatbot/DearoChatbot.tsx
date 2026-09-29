"use client";

import { useState } from "react";
import Link from "next/link";

type Message = {
  sender: "bot" | "user";
  text: string;
};

const quickQuestions = [
  "What is Dearo?",
  "What sectors does Dearo operate in?",
  "How can I contact Dearo?",
  "How can I apply for a job?",
];

const faqAnswers: Record<string, string> = {
  "what is dearo?":
    "Dearo Venture Capital is a diversified business organization involved in multiple sectors. We focus on creating sustainable value through our business activities and services.",

  "what sectors does dearo operate in?":
    "Dearo operates across several sectors including Agriculture, Engineering, Education, and DCCI. You can explore more information about our sectors on the website.",

  "how can i contact dearo?":
    "You can contact Dearo through the contact information provided on our website. You can also submit an inquiry through the website.",

  "how can i apply for a job?":
    "You can visit our Careers section to view available opportunities and submit your application.",

  "investment":
    "For investment-related inquiries, please visit the relevant section of the Dearo website or submit an inquiry through the website.",

  "careers":
    "Please visit the Careers section to view available job opportunities and application information.",

  "contact":
    "You can contact Dearo using the contact details available on our Contact page.",

  "branches":
    "Dearo has a growing network of branches serving customers across Sri Lanka. Please visit the relevant section of our website for more information.",

  "services":
    "Dearo provides services across several business areas. Please explore our Sectors section to learn more about our services and activities.",
};

function getBotAnswer(question: string): string {
  const normalizedQuestion = question.toLowerCase().trim();

  if (faqAnswers[normalizedQuestion]) {
    return faqAnswers[normalizedQuestion];
  }

  if (
    normalizedQuestion.includes("sector") ||
    normalizedQuestion.includes("business area")
  ) {
    return faqAnswers["what sectors does dearo operate in?"];
  }

  if (
    normalizedQuestion.includes("contact") ||
    normalizedQuestion.includes("phone") ||
    normalizedQuestion.includes("email")
  ) {
    return faqAnswers["contact"];
  }

  if (
    normalizedQuestion.includes("job") ||
    normalizedQuestion.includes("career") ||
    normalizedQuestion.includes("vacancy") ||
    normalizedQuestion.includes("work at dearo")
  ) {
    return faqAnswers["careers"];
  }

  if (
    normalizedQuestion.includes("invest") ||
    normalizedQuestion.includes("investment")
  ) {
    return faqAnswers["investment"];
  }

  if (
    normalizedQuestion.includes("branch") ||
    normalizedQuestion.includes("branches")
  ) {
    return faqAnswers["branches"];
  }

  if (
    normalizedQuestion.includes("service") ||
    normalizedQuestion.includes("services")
  ) {
    return faqAnswers["services"];
  }

  if (
    normalizedQuestion.includes("dearo") ||
    normalizedQuestion.includes("company") ||
    normalizedQuestion.includes("organization")
  ) {
    return faqAnswers["what is dearo?"];
  }

  return "I'm sorry, I don't have that information yet. Please try one of the questions below or contact Dearo for more information.";
}

export default function DearoChatbot() {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Hello! 👋 Welcome to Dearo Venture Capital. How can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = (messageText?: string) => {
    const text = (messageText ?? input).trim();

    if (!text) return;

    const userMessage: Message = {
      sender: "user",
      text,
    };

    const botMessage: Message = {
      sender: "bot",
      text: getBotAnswer(text),
    };

    setMessages((previous) => [
      ...previous,
      userMessage,
      botMessage,
    ]);

    setInput("");
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open Dearo Assistant"
          className="dearo-chat-button"
        >
          <span className="dearo-chat-icon">💬</span>

          <span className="dearo-chat-button-text">
            Dearo Assistant
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="dearo-chat-window">
          {/* Header */}
          <div className="dearo-chat-header">
            <div className="dearo-chat-header-left">
              <div className="dearo-chat-avatar">D</div>

              <div>
                <div className="dearo-chat-title">
                  Dearo Assistant
                </div>

                <div className="dearo-chat-status">
                  ● Online
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="dearo-chat-close"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div className="dearo-chat-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={
                  message.sender === "user"
                    ? "dearo-message-row user"
                    : "dearo-message-row bot"
                }
              >
                <div
                  className={
                    message.sender === "user"
                      ? "dearo-message user-message"
                      : "dearo-message bot-message"
                  }
                >
                  {message.text}
                </div>
              </div>
            ))}

            {/* Quick Questions */}
            {messages.length === 1 && (
              <div className="dearo-quick-questions">
                <p>Quick questions:</p>

                {quickQuestions.map((question) => (
                  <button
                    key={question}
                    type="button"
                    onClick={() => sendMessage(question)}
                    className="dearo-question-button"
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Useful Links */}
          <div className="dearo-chat-links">
            <Link href="/about">About</Link>
            <Link href="/sectors">Sectors</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/contact">Contact</Link>
          </div>

          {/* Input */}
          <div className="dearo-chat-input-area">
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your question..."
              aria-label="Type your question"
            />

            <button
              type="button"
              onClick={() => sendMessage()}
              aria-label="Send message"
              className="dearo-send-button"
            >
              ➤
            </button>
          </div>
        </div>
      )}

      {/* Styles */}
      <style jsx>{`
        .dearo-chat-button {
          position: fixed;
          right: 25px;
          bottom: 25px;
          z-index: 9999;

          display: flex;
          align-items: center;
          gap: 10px;

          border: none;
          border-radius: 50px;

          padding: 13px 20px;

          background: #073b26;
          color: #ffffff;

          font-size: 14px;
          font-weight: 600;

          cursor: pointer;

          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.22);

          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .dearo-chat-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.28);
        }

        .dearo-chat-icon {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 30px;
          height: 30px;

          border-radius: 50%;

          background: #ed1c24;

          font-size: 16px;
        }

        .dearo-chat-button-text {
          white-space: nowrap;
        }

        .dearo-chat-window {
          position: fixed;
          right: 25px;
          bottom: 25px;

          z-index: 10000;

          width: 370px;
          max-width: calc(100vw - 30px);

          height: 560px;
          max-height: calc(100vh - 50px);

          display: flex;
          flex-direction: column;

          overflow: hidden;

          background: #ffffff;

          border-radius: 18px;

          box-shadow: 0 15px 45px rgba(0, 0, 0, 0.25);

          border: 1px solid rgba(7, 59, 38, 0.12);
        }

        .dearo-chat-header {
          display: flex;
          align-items: center;
          justify-content: space-between;

          padding: 15px 16px;

          background: #073b26;
          color: #ffffff;
        }

        .dearo-chat-header-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .dearo-chat-avatar {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 40px;
          height: 40px;

          border-radius: 50%;

          background: #ed1c24;

          color: #ffffff;

          font-size: 18px;
          font-weight: 700;
        }

        .dearo-chat-title {
          font-size: 15px;
          font-weight: 700;
        }

        .dearo-chat-status {
          margin-top: 2px;

          font-size: 11px;

          color: #d9f5e6;
        }

        .dearo-chat-close {
          border: none;
          background: transparent;

          color: #ffffff;

          font-size: 28px;
          line-height: 1;

          cursor: pointer;

          padding: 3px 6px;
        }

        .dearo-chat-messages {
          flex: 1;

          overflow-y: auto;

          padding: 16px;

          background: #f7faf8;
        }

        .dearo-message-row {
          display: flex;

          margin-bottom: 10px;
        }

        .dearo-message-row.bot {
          justify-content: flex-start;
        }

        .dearo-message-row.user {
          justify-content: flex-end;
        }

        .dearo-message {
          max-width: 82%;

          padding: 10px 13px;

          border-radius: 14px;

          font-size: 13px;
          line-height: 1.5;
        }

        .bot-message {
          background: #ffffff;

          color: #173875;

          border: 1px solid #e5e9e7;

          border-bottom-left-radius: 4px;
        }

        .user-message {
          background: #173875;

          color: #ffffff;

          border-bottom-right-radius: 4px;
        }

        .dearo-quick-questions {
          margin-top: 12px;
        }

        .dearo-quick-questions p {
          margin: 0 0 8px;

          color: #555555;

          font-size: 12px;
          font-weight: 600;
        }

        .dearo-question-button {
          display: block;

          width: 100%;

          margin-bottom: 7px;

          padding: 9px 11px;

          text-align: left;

          border: 1px solid #dce5df;

          border-radius: 9px;

          background: #ffffff;

          color: #173875;

          font-size: 12px;

          cursor: pointer;

          transition:
            background 0.2s ease,
            border-color 0.2s ease;
        }

        .dearo-question-button:hover {
          background: #edf7f1;

          border-color: #073b26;
        }

        .dearo-chat-links {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;

          padding: 8px 12px;

          background: #ffffff;

          border-top: 1px solid #eeeeee;
        }

        .dearo-chat-links a {
          padding: 5px 8px;

          border-radius: 6px;

          background: #f1f5f3;

          color: #173875;

          font-size: 11px;
          font-weight: 600;

          text-decoration: none;
        }

        .dearo-chat-links a:hover {
          background: #e4eee8;
        }

        .dearo-chat-input-area {
          display: flex;
          align-items: center;
          gap: 8px;

          padding: 10px;

          background: #ffffff;

          border-top: 1px solid #eeeeee;
        }

        .dearo-chat-input-area input {
          flex: 1;

          min-width: 0;

          padding: 11px 12px;

          border: 1px solid #d8dedb;

          border-radius: 10px;

          outline: none;

          color: #173875;

          font-size: 13px;

          background: #ffffff;
        }

        .dearo-chat-input-area input:focus {
          border-color: #073b26;
        }

        .dearo-send-button {
          flex-shrink: 0;

          width: 40px;
          height: 40px;

          border: none;

          border-radius: 10px;

          background: #ed1c24;

          color: #ffffff;

          font-size: 17px;

          cursor: pointer;

          transition: background 0.2s ease;
        }

        .dearo-send-button:hover {
          background: #c9151c;
        }

        @media (max-width: 600px) {
          .dearo-chat-button {
            right: 15px;
            bottom: 15px;

            width: 52px;
            height: 52px;

            justify-content: center;

            padding: 0;

            border-radius: 50%;
          }

          .dearo-chat-button-text {
            display: none;
          }

          .dearo-chat-window {
            right: 10px;
            bottom: 10px;

            width: calc(100vw - 20px);

            height: calc(100vh - 20px);

            max-height: none;

            border-radius: 16px;
          }
        }

        @media (max-width: 380px) {
          .dearo-chat-window {
            right: 6px;
            bottom: 6px;

            width: calc(100vw - 12px);

            height: calc(100vh - 12px);
          }
        }
      `}</style>
    </>
  );
}