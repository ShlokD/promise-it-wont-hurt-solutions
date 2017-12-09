var HTTP = require("q-io/http");

HTTP.read('http://localhost:7000')
.then(function(val) {
  return HTTP.read('http://localhost:7001/'+val.toString());
})
.then(function(data) {
  console.log(JSON.parse(data.toString()));
})
.catch(function(e) {
  console.log(e.message);
});