

function all(promise1, promise2) {
  var counter = 0;
  var returnArr = [];
 
  var promise = new Promise(function(fulfill, reject) {
    function increment(val) {
      counter += 1;
      returnArr.push(val);
      if (counter === 2) {
        fulfill(returnArr);      
      }
    }

    
    Promise.resolve(promise1).then(increment);
    Promise.resolve(promise2).then(increment);

    
   
  });
  return promise;
}

all(getPromise1(), getPromise2()).then(console.log);