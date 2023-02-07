
import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from './pages/main/MainPage.vue';
import UserDetails from './pages/details/UserDetails.vue';
import App from './App'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: MainPage },
  { path: '/user-details/:id', component: UserDetails, name: "details", props: true },
]

const router = new VueRouter({
    base: '/skiwo-vue-2/',
    routes,
    mode: 'history'
})

Vue.config.productionTip = false;


new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
