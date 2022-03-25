<template>
  <div id="app">
    <!-- OurHeader가 카멜 표기법이라 자동으로 중간에 - 넣는 형태로 변형 돼서 사용 할 수 있음 -->
    <!-- 컴포넌트 이름으로 그대로 사용해도 ㄱㅊ -->
    <our-header></our-header>
    <our-body></our-body>
    <our-footer></our-footer>
  </div>
</template>

<script>
import OurHeader from "./components/OurHeader.vue"
import OurBody from "./components/OurBody.vue"
import OurFooter from "./components/OurFooter.vue"

export default {
  name: 'App',
  components: {
    OurHeader,
    OurBody,
    OurFooter
  }
}
</script>

<style>
</style>