<template>
  <div id="app">
    반갑
    <ul>
      <li>HTML5</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </div>
</template>

<script>
// 컴포넌트 하나를 다른 파일에서 쓸 수 있게 배포
// 객체 하나니깐 exprot default를 씀
export default {
  name: 'App',
  // 자식 컴포넌트가 들어옴
  components: {
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>