const assert = require(`assert`);

const num = 1;

try {
    assert.equal(num, 1, `num is equal to 1`);
} catch (error) {
    console.log(`Assertion Error`);
    console.log(error);
    console.log(`Stack Trace`);
    console.log(error.stack);
}

try {
    assert.equal(num, 2, `num is not equal to 2`);
} catch (error) {
    console.log(`Assertion Error`);
    console.log(error);
    console.log(`Stack Trace`);
    console.log(error.stack);
}
