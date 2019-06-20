<template>
  <div id="app">
<Todos v-bind:todos="todos"/>
  </div>
</template>

<script>
 
import Todos from './components/Todos';

export default {
  name: 'app',
  components: {
    //HelloWorld
    Todos
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          title: "ToDo eins",
          completed: false
        },
        {
          id: 2,
          title: "ToDo zwei",
          completed: true
        },
        {
          id: 3,
          title: "ToDo drei",
          completed: false
        }
      ]
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
