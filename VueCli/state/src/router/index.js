import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

// 라우터를 쓰기위해서는 Vue.use라는 펑션을 실행 해야 됨
Vue.use(VueRouter)

// 아래가 메뉴 부분
// 메뉴 객체 배열 정의
const routes = [
  {
    // 메인 페이지(home페이지)
    // 그냥 슬래쉬면 메인페이지
    // path는 주소창에 뜨는 쉨히
    path: '/',
    name: 'home',
    // views파일 안에 homeview.vue랑 연결 됨
    // 한 마디로 path랑 연결되는 컴포넌트는 HomeView다
    // 이렇게 맞춰놓으면 자동으로 연결 시켜 줌

    // 위에서 가져와서 써도 됨(심플해서 이걸 써)
    component: HomeView
  },
  {
    // 따까리 페이지(about페이지)
    // 슬래쉬 다음 이름적어주면 따까리 페이지
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.

    // 가져오기 싫으면 펑션(화살표 함수)을 써서 직접 걸어줘도 된다 이기
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

// 라우터 생성 부분
const router = new VueRouter({
  routes
})

export default router
