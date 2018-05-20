// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import axios from 'axios'

import { Swipe, SwipeItem } from 'vant';
import { Button } from 'vant'
import { NavBar } from 'vant'
import { Icon } from 'vant'
import { Actionsheet } from 'vant'

Vue.config.productionTip = false

Vue.use(Button)
Vue.prototype.$http = axios
Vue.use(Swipe).use(SwipeItem);
Vue.use(VueRouter)
Vue.use(NavBar)
Vue.use(Icon)
Vue.use(Actionsheet)

import Wxshouye from './components/Wxshouye'
import Navone from './components/Navone.vue'


// 设置路由
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  
  routes: [{
    path: '/',
      component: Wxshouye
    },
    {
      path: '/Navone',
      component: Navone
    },
  ]
})




//  下面的是导航部分  只有2个名字。 一个hello 一个new.
new Vue({
  router,
  template: `
    <div id="app">
 
        <router-view></router-view>
    </div>
  `
}).$mount("#app")


// new Vue({
//   el: '#app',
//   router,
//   components: {
//     App
//   },
//   template: '<App/>'
// })
