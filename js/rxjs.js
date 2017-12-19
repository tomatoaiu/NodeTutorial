var Rx = require('rxjs/Rx')

Rx.Observable.from([1, 2, 3, 4])
.map((x) => x + 100)
.subscribe(s => console.log(s))

let sum = 0
let sumObservable = Rx.Observable.from([1, 2, 3, 4])
.map((x) => x + 3)
.do((x) => {
    sum += x
    console.log("sum" +sum);
})
sumObservable.subscribe(s => console.log(s))
