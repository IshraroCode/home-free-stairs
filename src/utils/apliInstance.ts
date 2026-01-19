 export const BASE_URL = 'https://64ps06tv-8055.inc1.devtunnels.ms'; // Add your API base URL here

// GET request
export const getApi = async (url) => {
  try {
    const response = await fetch(`${BASE_URL}${url}`);
  
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('GET API error:', error);
    return null; // or throw error if you want the component to handle it
  }
};

// POST request
export const postApi = async (url, body = {}) => {
  try {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('POST API error:', error);
    return null; // or throw error if you want the component to handle it
  }
};
