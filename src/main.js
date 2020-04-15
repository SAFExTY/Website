import Vue from 'vue';
import Buefy from 'buefy';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(Buefy, {
  defaultIconPack: 'fa',
  defaultContainerElement: '#content',
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
