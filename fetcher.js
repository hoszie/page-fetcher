const request = require('request');
const fs = require('fs');
const args = process.argv.slice(2);



request(args[0], (error, response, body) => {
  if (error) {
    throw error;
  }
  if (response.statusCode !== 200) {
    throw response.statusCode;
  }
  
  fs.writeFile(args[1], body, (err) => {
    if (err) {
      throw err;
    }
  });
  console.log("Downloaded web page to index.js");
})
