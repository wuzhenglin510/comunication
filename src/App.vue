<template>
  <div id="app">
    <router-view/>
    <notifications group="right" />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  background-color: #CCCCCC;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #CCCCCC;
  margin-top: 60px;
}
</style>
