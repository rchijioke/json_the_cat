const request = require("request");

// const fs = require('fs')

const breedName = process.argv[2];
const fetchBreedDescription = function (breedName, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      if (error) {
        error = `Error making request: ${error}`;
        return callback (error, null);
      } else {
        const data = JSON.parse(body);

        if (!data.length) {
          const message = "Breed not found"
          console.log(message);
          return callback (message, null)

        } else {
          const desc = data[0].description;
          return callback(null, desc);
        }
      }
    }
  );
};

module.exports = { fetchBreedDescription };
