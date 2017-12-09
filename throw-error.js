function parsePromised(path) {
  return new Promise(function(resolve,reject) {
    try {
      var contents = JSON.parse(path);
      resolve(contents);
    } catch(e) {
      reject(e.message);
    }
  })
};

parsePromised(process.argv[2]).then(null, console.log);