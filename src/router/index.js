import Vue from 'vue'
import VueRouter from 'vue-router'

//注册插件
Vue.use(VueRouter)

  const routes = [

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
