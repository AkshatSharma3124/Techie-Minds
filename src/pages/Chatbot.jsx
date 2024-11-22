import React, { useState } from 'react';
import geminiService from '../geminiService'; // Your API call
import { FaPaperPlane } from 'react-icons/fa'; // Importing an icon

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSend = async () => {
    setLoading(true);
    try {
      const apiResponse = await geminiService(input);
      setResponse(apiResponse.candidates[0].content.parts[0].text);
      setInput(''); // Clear input after sending
    } catch (error) {
      setResponse('Error: Could not retrieve response.');
    }
    setLoading(false);
  };

  return (
    <div className="chatbot-container bg-blue-200 p-4 rounded-md shadow-md mx-auto">
      <h1 className="text-xl font-bold text-blue-800 mb-4 text-center">Bring your Career towards the right direction.</h1>
      <div className="flex items-center mb-4">
        <textarea
          className="flex-grow p-2 border rounded-md resize-none"
          value={input}
          onChange={handleInputChange}
          placeholder="How can I assist you in your career guidance?"
          rows="3"
        />
        <button
          onClick={handleSend}
          className="bg-blue-900 text-white px-4 py-2 ml-2 rounded-md flex items-center"
          disabled={loading}
        >
          <FaPaperPlane className="mr-2" />
          {loading ? 'Sending...' : 'Send'}
        </button>
      </div>

      {response && (
        <div className="response p-4 bg-white rounded-md shadow-sm mt-4">
          <strong>Response:</strong>
          <p className="mt-2">{response}</p>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
