const { fetchBreedDescription } = require("./breedFetcher");

const breedName = process.argv[2];
fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  }

 else {
  console.log(desc);
}
  // if (body) {
  //   console.log(typeof body); // Print the HTML for the Google homepage.

  //   const data = JSON.parse(body);
  //   console.log(data);
  //   console.log(typeof data);
  //   console.log(typeof data[0]);
  //   return;
  // }

  // console.log("breed not found");
});
