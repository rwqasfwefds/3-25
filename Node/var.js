const odd = '홀수 입니다.';
const even = '짝수 입니다.';

// 다른 파일에서 쓸 수 있게 (모듈을 쓸 수 있게)하는 명령어
// 변수를 배포
// 배포 한 것만 다른 곳에서 받아갈 수 있음
module.exports = {
    odd,
    even
}