// node js/3baka.js
// test mocha js/3baka.js

const chai = require(`chai`);
const assert = chai.assert;   

const notNumber = `Not Number`;

const main = (inputStr, num) => {
    const strArray = stringToArray(inputStr, ` `);
    console.log(strArray);
    for (const str of strArray) {
        console.log(baka(str, num));
        // test return baka(str, num);
    }
};

const baka = (valueStr, targetNum) => {
    if(!valueStr) return `Not String`;
    const num = strToNum(valueStr);
    
    if(num === notNumber) return notNumber;
    if(num === 0) return `${num} は 0 ですよ`;

    if(num % targetNum === 0 && isStrIncludeNum(num, targetNum)) {
        return `${targetNum}で割れて${targetNum}を含んますよ`;
    } else if(num % targetNum === 0){
        return `${num} は${targetNum}で割り切れますよ`;
    } else if(isStrIncludeNum(num, targetNum)){
        return `${num} は${targetNum}を含んでいますよ`;
    } else {
        return `以外`;
    }
};

const strToNum = (str) => {
    try {
        const num = Number(str);
        return num || num === 0 ? num : notNumber;
    } catch (error) {
        return notNumber;
    }
};

const isStrIncludeNum = (num, targetNum) => {
    try {
        const inc = (String(num)).includes(`${targetNum}`);
        return inc ? inc : false;
    } catch (error) {
        return false;
    }
};

const stringToArray = (str, sep) => {
    try {
        const array = str.split(sep);
        return array ? array : [];
    } catch (error) {
        return [];
    }
};

main("", 3);
main("a", 3);
main("12", 3);
main("12 32", 3);
main("3 4 a 1", 3);
main("0", 3);


describe(`test 1`, () => {
    it(`num is [Not String]`, () => {
        assert.equal(baka("", 3), `Not String`);
    });
});

describe(`test 2`, () => {
    it(`num is [Not Number]`, () => {
        assert.equal(baka("a", 3), `Not Number`);
    });
});

describe(`test 3`, () => {
    it(`num is [12 は3で割り切れますよ]`, () => {
        assert.equal(baka("12", 3), `12 は3で割り切れますよ`);
    });
});

describe(`test 4`, () => {
    it(`num is [12 は3で割り切れますよ], num is [32 は3を含んでいますよ]`, () => {
        assert.equal(baka("12", 3), `12 は3で割り切れますよ`);
        assert.equal(baka("32", 3), `32 は3を含んでいますよ`);
    });
});

describe(`test 6`, () => {
    it(`num is [0 は 0 ですよ]`, () => {
        assert.equal(baka("0", 3), `0 は 0 ですよ`);
    });
});