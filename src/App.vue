<template>
  <div id="app">
    <Todos />
    <!-- <Todos /> -->
  </div>
</template>

<script> 

import Todos from "./components/Todos";

export default {
  name: 'app',
  components: {
    //HelloWorld
    Todos
  },
  data() {
    return {

    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
</style>
