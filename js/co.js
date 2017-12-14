function doA() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log('A done');
      resolve();
    }, 1000);
  });
}

function doB() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log('B done');
      resolve();
    }, 1000);
  });
}

function doC() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log('C done');
      resolve();
    }, 1000);
  });
}

var co = require('co');

doA()
  .then(doB)
  .then(doC)
  .then(() => {
      (async function() {
        await doA();
        await doB();
        await doC();
      })()
  })
  .then(() => {
      // async と await が一緒に実行される
      co(function* () {
        yield doA();
        yield doB();
        yield doC();
      });
  })
