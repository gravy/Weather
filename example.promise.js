function addPromise(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('arguments are not numeric');
      }
    }, 1000);
  });
}

addPromise(2, 5).then((returnValue) => {
  console.log('promise success', returnValue);
}, (err) => {
  console.log('promise error', err);
});

addPromise('2', 5).then((returnValue) => {
  console.log('promise success', returnValue);
}, (err) => {
  console.log('promise error', err);
});
