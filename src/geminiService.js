import axios from 'axios';

// Replace with your actual API key
const API_KEY = 'AIzaSyAT2iAspP-sMPFwImHIg40jvfCixFEQNrM';

const geminiService = async (prompt) => {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`;
  
  const data = {
    contents: [
      {
        parts: [
          {
            text: prompt,
          },
        ],
      },
    ],
  };

  try {
    const response = await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    // Return the response
    return response.data;
  } catch (error) {
    console.error('Error fetching response from Google API:', error);
    throw error;
  }
};

export default geminiService;
