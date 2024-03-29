const axios = require('axios');

// Define the API endpoint URL
const slack_web_url = 'https://axios.com/todos/1';

// Make an API request using Axios
axios.get(slack_web_url, { "idfa": "UYBJBJHN"  })
  .then((response) => {
    // Handle the response data
    console.log(response.data);
  })
  .catch((error) => {
    // Handle the error
    console.error(error);
  });
