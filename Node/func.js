// cdn링크 거는거와 같은 작용을 하는 쉨히
// 자바스크립트에서 받아오는 법
// 한 마디로 가져오는거임
// 뒤에 .js 확장자는 생략 가능
// 이름은 변경 해도 됨 그냥 순서에 맞춰서 딱딱 들어감
const{odd, even} = require('./var.js');

function checkOddOrEven(num){
    if(num % 2 == 1){
        return odd;
    }
    // else같은 쉨히
    // if문이 거짓이라면 안에 있는 내용이 실행이 안 되고
    // 바로 밑으로 내려와서 얘를 실행하기 때문에
    return even;
}

// 함수 배포
module.exports = checkOddOrEven;