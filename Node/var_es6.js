const odd = '홀수 입니다.';
const even = '짝수 입니다.';

// 버전 5 문법
// module.exports = {
//     odd,
//     even
// };

// 버전 6 문법
// 배포할게 2개 이상이면 그냥 export 하고 중괄호만 적으면 됨
export {
    odd,
    even
};
