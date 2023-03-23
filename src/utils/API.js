import axios from 'axios';

const baseURL = 'https://api.api-ninjas.com/v1/nutrition?query=';
const APIKey = 'MrOJ+RzL8+j+w8TBKfz/tQ==4XpdDeYsI150v5z0';

function API(query) {
  return axios.get(baseURL + query, {
    headers: {
      'X-Api-Key': APIKey
    }
  });
}

export default API;