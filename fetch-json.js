var HTTP = require("q-io/http");

HTTP.read('http://localhost:1337')
.then(function(val) {
  console.log(JSON.parse(val))
})
.catch(function (e) {
  console.log(e.message); 
})