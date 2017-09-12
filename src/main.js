import Vue from 'vue';
import VueI18n from 'vue-i18n';
import App from './App';
import router from './router';
import store from './store';
import './styles/main.css';

Vue.config.productionTip = false;
Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'en',
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  store,
  router,
  render: h => h(App),
});
