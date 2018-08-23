import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';

Vue.config.productionTip = false;
Vue.component('my-element', {
  render: function(createElement){
    var str = '';
    switch (this.type){
      case 'picture':
        str = '<img :src="'+ this.config.src +'" class="default-img" >';
        break;
      case 'label':
      str = '<p class="default-label" >' + this.config.text +'</p>';
      break;
    }
    return createElement({
      template: str
    })
  },
  props: ['type','config']
})
new Vue({
  render: h => h(App)
}).$mount('#app')
