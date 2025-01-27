import {useRef} from 'react';

const ChatForm = ({chatHistory, setChatHistory, generateBotResponse}) => {
    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        if (!userMessage) return;
        inputRef.current.value = "";

        // Update chat history with user's message
        setChatHistory((history) => [...history, {role: "user", text: userMessage}]);

        // Add a "Thinking" placeholder for the bot's response
        setTimeout(() => {
            setChatHistory((history) => [...history, {role: "model", text: "Thinking..."}]);
            
            // Call the function to generate the bot's response
            generateBotResponse([...chatHistory, {role: "user", text: userMessage}]);
        }, 600);
    
    
    };

  return (
    <form action="#" className="chat-form" onSubmit={handleSubmit}>
              <input ref={inputRef} type="text" placeholder="Message..." className="message-input" required/>
              <button className="material-symbols-outlined">arrow_upward</button>
    </form>
  );
};

export default ChatForm;