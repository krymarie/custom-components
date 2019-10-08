import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';//not in maxes code

Vue.config.productionTip = false//not a clue what this was for

export const eventBus = new Vue({
  methods: {
      changeAge(age) {
          this.$emit('ageWasEdited', age);
      }
  }
});

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')//also not in maxes code
