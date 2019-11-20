<template>
  <div id="app">
    <menu-bar></menu-bar>
  </div>
</template>

<script>
import MenuBar from './components/MenuBar.vue'

export default {
  name: 'app',
  components: {
    MenuBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #2c3e50;
  height: 100%;
}
</style>
