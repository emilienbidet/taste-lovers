import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import globalVariables from './plugins/globalVariables';

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  globalVariables,
  render: h => h(App)
}).$mount('#app');
