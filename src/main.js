import Vue from 'vue';
import ToDoApp from './ToDoApp.vue';

new Vue({
  render: h => h(ToDoApp),
}).$mount('#main');