import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MetaInfo from 'vue-meta-info'
Vue.use(MetaInfo)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  //添加到这里,这里的render-event和vue.config.js里面的renderAfterDocumentEvent配置名称一致
  mounted () {
    // document.dispatchEvent(new Event('render-event'))
  }
}).$mount('#app')
