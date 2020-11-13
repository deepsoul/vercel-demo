<template>
  <div id="app">
    <Logo />
    <Doodle/>    
  </div>
</template>

<script>
import Logo from './components/Logo.vue'
import Doodle from './components/Doodle.vue'

export default {
  name: 'app',
  components: {
    Logo,
    Doodle
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
