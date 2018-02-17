const chai = require(`chai`); 
const expect = chai.expect;

const num = 1;

describe(`mocha`, (() => {
    it(`num is 1`, (() => {
        num.should.equal(1);
    }));
}));
