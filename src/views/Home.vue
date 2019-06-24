

<template>
  <div>
    <Todos/>
  </div>
</template>

<script>
// Test with JSON API
// https://jsonplaceholder.typicode.com/todos

import Todos from "../components/Todos";

export default {
  name: "home",
  components: {
    Todos
  },
  data() {
    return {};
  },
  created() {}
};
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
  text-decoration: none;
}
</style>