<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Conversor moeda-a="USD" moeda-b="BRL" />
  </div>
</template>

<script>
import Conversor from "./components/Conversor";

export default {
  name: 'app',
  components: {
    Conversor
  }
}
</script>

<style>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #F5F5F5;
  transition: all 0.24s;
  font-family: "Raleway", serif;
  overflow: hidden;
}

#app {
  text-align: center;
}
</style>
