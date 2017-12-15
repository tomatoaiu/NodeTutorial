var array = [1,2];
var array2 = ["あ","い"];

function* foo(){
    yield* array;
    yield* array2;
}

var iterator = foo();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// while(true){
//     let i = iterator.next();
//     if(i.done) break;
//     console.log(i.value);
// }

// for (let value of iterator){
//     console.log(value);
// }

for(var v of array){
    console.log(v);
}

var array3 = [...array, ...array2];
array3.forEach((v, i, a) => {
    console.log("value : "+v);
    console.log("index : "+i);
    console.log("array : "+a);
});
