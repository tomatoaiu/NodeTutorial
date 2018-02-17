const should = require(`should`);

const num = 1;

try {
    num.should.equal(1);
} catch (error) {
    console.log(`Assertion Error`);
    console.log(error);
    console.log(`Stack Trace`);
    console.log(error.stack);
}

try {
    num.should.equal(2);
} catch (error) {
    console.log(`Assertion Error`);
    console.log(error);
    console.log(`Stack Trace`);
    console.log(error.stack);
}