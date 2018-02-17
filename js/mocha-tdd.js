const chai = require(`chai`); 
const expect = chai.expect;

const num = 1;

suite(`mocha`, (() => {
    it(`num is 1`, (() => {
        expect(num).to.equal(1);
    }));
}));
