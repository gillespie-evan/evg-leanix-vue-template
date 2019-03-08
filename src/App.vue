<template>
  <div id="app">
    <Report msg="Application Cost Pie Chart"/>
  </div>
</template>

<script>
import Report from './components/Report.vue'
import Query from './components/Query.vue'

export default {
  name: 'app',
  components: {
    Report,
    Query
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
