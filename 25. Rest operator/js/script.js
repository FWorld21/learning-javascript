"use strict";

const log = (a, b, ...rest) => {
    console.log(`a: ${a}\nb: ${b}\nRest: ${rest}`);
    console.log(rest);
};

log(1, 2, 'hello', 'world', 'I', 'love', 'it');