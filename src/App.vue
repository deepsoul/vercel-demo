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

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;500&family=Roboto:ital,wght@0,500;1,300&display=swap');

html { 
  background: url(assets/chocolate-chip-cookies.jpg) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  font-family: 'Raleway', sans-serif;
  display:inline-block;
}


</style>
