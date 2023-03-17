const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://calories-burned-by-api-ninjas.p.rapidapi.com/v1/caloriesburned',
  params: {activity: 'skiing'},
  headers: {
    'X-RapidAPI-Key': '19e9b96bcemsh490bf27017b90c2p136fbejsn9cc65e3d7921',
    'X-RapidAPI-Host': 'calories-burned-by-api-ninjas.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});