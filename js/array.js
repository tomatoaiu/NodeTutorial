var array = [1,2,3,4,5];

var bo = array.every((value) => {
    console.log(value);
    return (value >= 1);
})

console.log(bo);

var bo2 = array.some((value) => {
    console.log(value);
    return (value >= 1);
})

console.log(bo2);

var array2 = array.copyWithin(0, 2, 4);
console.log(array2);

var array3 = array.fill(9, 2, -1);
console.log(array3);

var array4 = array.filter((value) => {
    return (value !== 9);
});
console.log(array4);

var v = array.find((value) => {
    return (value === 5);
});
console.log(v);

var bo3 = array.includes(5);
console.log(bo3);

var v2 = array.join(5);
console.log(v2);

var v3 = array.reduce((pre, cur) => {
    return pre + cur;
});
console.log(v3);
