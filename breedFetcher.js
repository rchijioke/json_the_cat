const request = require("request");

// const fs = require('fs')

//const pathToSave = process.argv[3]
const fetchBreedDescription = function (breedName, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      callback(error, response, body);
    }
  );
};

module.exports = { fetchBreedDescription };
