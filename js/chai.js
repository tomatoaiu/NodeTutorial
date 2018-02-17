const chai = require(`chai`); 
const should = chai.should();
const expect = chai.expect;
const assert = chai.assert;   

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

console.log(`-----------------------------------------------------------------------`);

try {
    expect(num).to.equal(1);
} catch (error) {
    console.log(`Assertion Error`);
    console.log(error);
    console.log(`Stack Trace`);
    console.log(error.stack);
}

try {
    expect(num).to.equal(2);
} catch (error) {
    console.log(`Assertion Error`);
    console.log(error);
    console.log(`Stack Trace`);
    console.log(error.stack);
}

console.log(`-----------------------------------------------------------------------`);

try {
    assert.equal(num, 1);
} catch (error) {
    console.log(`Assertion Error`);
    console.log(error);
    console.log(`Stack Trace`);
    console.log(error.stack);
}

try {
    assert.equal(num, 2);
} catch (error) {
    console.log(`Assertion Error`);
    console.log(error);
    console.log(`Stack Trace`);
    console.log(error.stack);
}