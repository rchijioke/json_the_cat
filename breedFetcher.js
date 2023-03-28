const request = require("request");

// const fs = require('fs')

const pathToSave = process.argv[2];
const fetchBreedDescription = function (breedName, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      if (error) {
        console.log(`Error making request: ${error}`);
      } else {
        const data = JSON.parse(body);

        if (!data.length) {
          return console.log("Breed not found.");
        } else {
          const description = data[0].description;
          console.log(description);
        }
      }
    }
  );
};

fetchBreedDescription(pathToSave);
module.exports = { fetchBreedDescription };
