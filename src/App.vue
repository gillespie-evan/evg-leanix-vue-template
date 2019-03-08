<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Report msg="Welcome to Your Vue LIVE.js App"/>
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
