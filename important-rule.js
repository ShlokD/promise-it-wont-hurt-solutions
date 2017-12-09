function alwaysThrows() {
  throw new Error('OH NOES');
}

function iterate(i) {
  console.log(i);
  return i + 1;
}

function onReject(e){
  console.log(e.message);
}

Promise.resolve(1)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(alwaysThrows)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.catch(onReject);
