const { fetchBreedDescription } = require("../breedFetcher");
const { assert } = require("chai");

describe("fetchBreedDescription", () => {
  it("returns a string description for a valid breed, via callback", (done) => {
    fetchBreedDescription("Siberian", (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc =
        "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });

  it("In this scenario, we expect the first argument for our callback (err) to be set, and desc to be null", (done) => {
    fetchBreedDescription("Jsxcw", (err, desc) => {
      // we expect no error for this scenario
      // assert.equal(expecteerr, null);

      assert.equal(desc, null);
      const expectedErr = "Breed not found";

      // compare returned description
      assert.equal(expectedErr, err);

      done();
    });
  });
});
