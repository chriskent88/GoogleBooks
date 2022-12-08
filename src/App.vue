<template>
  <div id="app">
    <div class="container">
      <img class="logo" src="./assets/images/logo.png">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}

body {
  margin: 0;
  font-family: 'Open Sans', sans-serif;
}

#app {
  text-align: center;
  color: #fff;
}

.logo {
  display: block;
  max-width: 100%;
  margin: 40px auto;
}

.container {
  padding-inline: 30px;
}

</style>
