<template>
  <div>
  <EmployeeForm v-bind="schema=employeeSchema" />
  </div>
</template>

<script>
import EmployeeForm from './EmployeeForm.vue';


export default {
  name: 'App',
  components: {
    EmployeeForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
