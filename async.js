var count = 0;
function asyncFunc() {
    const p = new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log(count + '回目の処理');
          resolve(count++);
      }, 2000);
    });

    return p;
}

async function calcResult() {
    const item1 = await asyncFunc();
    const item2 = await asyncFunc();
    const item3 = await asyncFunc();
    console.log(item1);
    console.log(item2);
    console.log(item3);
    console.log('done! result : ' + (item1+item2+item3));
}

calcResult();

(() => {
    asyncFunc().
    then(asyncFunc).
    then(asyncFunc).
    then((value) => {
        console.log("then : " + value);
    })
})();
