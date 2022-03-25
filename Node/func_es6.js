// 버전 5 문법
// const{odd, even} = require('./var.js');

// 버전 6 문법
import {odd, even} from './var_es6.js';

function checkOddOrEven(num){
    if(num % 2 == 1){
        return odd;
    }
    return even;
}
// 버전 5 문법
// module.exports = checkOddOrEven;

// 버전 6 문법
// default는 하나 짜리일때 export뒤에 넣는다
export default checkOddOrEven;