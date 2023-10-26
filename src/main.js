import { createApp } from 'vue'
import Vue from 'vue';
import App from './App.vue'
import EmployeeForm from './EmployeeForm.vue'



createApp(App).mount('#app')
Vue.component('EmployeeForm', EmployeeForm);
new Vue({
    el: '#app',
    render: h => h(App),
  });