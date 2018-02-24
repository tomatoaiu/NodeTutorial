// test mocha js/3baka.js

const chai = require(`chai`);
const assert = chai.assert;   

const notNumber = `Not Number`;

const main = (inputStr, num) => {
    const strArray = stringToArray(inputStr, ` `);
    return strArray.map((str) => {
        return baka(str, num);
    });
};

const baka = (valueStr, targetNum) => {
    if(!valueStr) return `Not String`;
    const num = strToNum(valueStr);
    
    if(num === notNumber) return notNumber;
    if(num === 0) return `${num} は 0 ですよ`;

    if(num % targetNum === 0 && isStrIncludeNum(num, targetNum)) {
        return `${targetNum}で割れて${targetNum}を含んでますよ`;
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

describe(`test 1`, () => {
    it(`num is [Not String]`, () => {
        assert.equal(main("", 3)[0], `Not String`);
    });
});

describe(`test 2`, () => {
    it(`num is [Not Number]`, () => {
        assert.equal(main("a", 3)[0], `Not Number`);
    });
});

describe(`test 3`, () => {
    it(`num is [12 は3で割り切れますよ]`, () => {
        assert.equal(main("12", 3)[0], `12 は3で割り切れますよ`);
    });
});

describe(`test 4`, () => {
    it(`num is [12 は3で割り切れますよ], num is [32 は3を含んでいますよ]`, () => {
        const result = main("12 32", 3);
        assert.equal(result[0], `12 は3で割り切れますよ`);
        assert.equal(result[1], `32 は3を含んでいますよ`);
    });
});

describe(`test 5`, () => {
    it(`3 is [3で割れて3を含んでますよ], 4 is [以外], a is [Not Number], 1 is [以外]`, () => {
        const result = main("3 4 a 1", 3);
        assert.equal(result[0], `3で割れて3を含んでますよ`);
        assert.equal(result[1], `以外`);
        assert.equal(result[2], `Not Number`);
        assert.equal(result[3], `以外`);
    });
});

describe(`test 6`, () => {
    it(`num is [0 は 0 ですよ]`, () => {
        assert.equal(main("0", 3)[0], `0 は 0 ですよ`);
    });
});