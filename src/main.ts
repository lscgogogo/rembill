import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from '@/components/Nav.vue'
import Layout from '@/components/Layout.vue'
import Icon from '@/components/Icon.vue'

Vue.config.productionTip = false

Vue.component('Nav', Nav)
Vue.component('Layout', Layout)
Vue.component('Icon', Icon)




new Vue({
  router: router,
  store,
  render: h => h(App)
}).$mount('#app')


window.onload = function () {
  setTimeout(() => {
    window.scrollTo(0, 200)
  }, 0);
}

if (document.documentElement.clientWidth > 500) {
  alert('请使用手机打开，以保证浏览效果,可用手机扫下方二维码进行浏览')

  const img = document.createElement('img')
  img.src = '/qrcode.png'
  img.style.position = 'fixed'
  img.style.left = '30%'
  img.style.top = '30%'
  img.style.transform = 'translate(50%,50%)'
  img.style.boxShadow = '0 0 10px'
  document.body.appendChild(img)

}