

<template>
  <div id="app">
    <Header/>
    <Todos/>
    <Footer/>
    <!-- <Todos /> -->
  </div>
</template>

<script>
// Test with JSON API
// https://jsonplaceholder.typicode.com/todos

import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import Footer from "./components/layout/Footer";
//import { eventbus } from "./eventbus";

export default {
  name: "app",
  components: {
    //HelloWorld
    Header,
    Todos,
    Footer
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
}
</style>