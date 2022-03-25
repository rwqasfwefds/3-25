// 버전 5 문법
// const{odd, even} = require('./var.js');
// const checkNumber = require('./func.js');

// 버전 6 문법
import{odd, even} from './var_es6.js';
import checkOddOrEven from'./func_es6.js';

function checkStringOddOrEven(str){
    if(str.length % 2 == 1){
        return odd;
    }
    return even;
}

console.log(checkOddOrEven(10));
console.log(checkStringOddOrEven('hello'));