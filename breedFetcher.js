const request = require('request')

// const fs = require('fs') 

const breed = process.argv[2]
//const pathToSave = process.argv[3]
request(`https://api.thecapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if(error){
    console.log("there is an error")
    return
  }
  if (breed){
     console.log(typeof body); // Print the HTML for the Google homepage.
  
  const data = JSON.parse(body);
console.log(data);
console.log(typeof data)
console.log(typeof data[0])
return
}
console.log("breed not found")
  }); 
  
  
;