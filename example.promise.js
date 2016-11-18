function addPromise(a, b) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('arguments are not numeric');
      }
    }, 1000);
  });
}

addPromise(2, 5).then(function(returnValue) {
  console.log('promise success', returnValue);
}, function(err) {
  console.log('promise error', err);
});

addPromise('2', 5).then(function(returnValue) {
  console.log('promise success', returnValue);
}, function(err) {
  console.log('promise error', err);
});
