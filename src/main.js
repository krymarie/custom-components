import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false//from last project might not be used

export const eventBus = new Vue({
  methods: {
      changeAge(age) {
          this.$emit('ageWasEdited', age);
      }
  }
});

new Vue({
  el: '#app',
  vuetify,//from last project
  render: h => h(App)
}).$mount('#app')//aslo from last project

//push comes to shove just do all of this instead exactly like max
// import Vue from 'vue'
// import App from './App.vue'

// export const eventBus = new Vue({
//     methods: {
//         changeAge(age) {
//             this.$emit('ageWasEdited', age);
//         }
//     }
// });

new Vue({
  el: '#app',
  render: h => h(App)
})