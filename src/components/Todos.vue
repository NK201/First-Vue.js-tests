<template>
  <div>
    <h1>Todos</h1>

    <div v-bind:key="index" v-for="(todo,index) in todos">
      <TodoItem v-bind:todo="todo" />

    </div>

    <input type="text" v-model="inputText">

    <button class="button" @click="addItem">
      CLICK MICH
    </button>

  </div>
</template>

<script>
import TodoItem from './TodoItem';


export default {
  name: "Todos",
  components: {
    TodoItem
  },
  data() {
    return {
      todos: [

      ],
      inputText: null
    }
  },
  methods: {
    // METHODEN
    // --------------------

    addItem() {

      // get max ID in array
      let max = 0;
      this.todos.forEach(element => {
        if (max <= element.id) {
          max = element.id + 1;
        }

      });


      if (this.inputText != null) {
        this.todos.push({ id: max, title: this.inputText, completed: false })
        this.inputText = null;
      }

    }

  },
  beforeMount() {
    this.todos = [
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
</script>

<style scoped>
.button {
  padding: 8px 16px;
  color: white;
  background-color: blue;
  border: none;
  border-radius: 6px;
  box-shadow: 0 0 10px -1px rgba(0, 0, 0, 0.5);
  cursor: crosshair;
}

.button:hover {
  background-color: blueviolet;
  box-shadow: 0 2px 10px -1px rgba(0, 0, 0, 0.9);
}
</style>


