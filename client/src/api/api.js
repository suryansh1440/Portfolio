// Base URL for your API
const BASE_URL = 'https://your-backend-api-url.com'; // Replace with your actual API URL

// API endpoints
const SummeryApi = {
  // Contact form submission endpoint
  postcontact: {
    method: 'POST',
    url: `${BASE_URL}/api/contact`,
    headers: {
      'Content-Type': 'application/json',
    },
  },
  // You can add more API endpoints here
};

export default SummeryApi; 