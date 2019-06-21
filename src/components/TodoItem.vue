<template>
    <div class="todo-item">

        <div class="title">
            <input type="checkbox" v-model="todo.completed"> {{todo.id}} &nbsp; {{todo.title}}

        </div>

        <button class="del" @click="delTodo">x</button>
    </div>
</template>

<script>
import eventbus from '../eventbus';


export default {
    name: "TodoItem",
    props: { todo: { type: Object, required: true } },
    methods: {
        delTodo() {
            console.log("emitting message on the bus... Methode delItem");

            eventbus.$emit('todo-deleted', this.todo.id);

        }
    }
}
</script>

<style scoped>
.todo-item {
    background: #f4f4f4;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
    display: block;
    overflow: hidden;
}


.del {
    background: #ff0000;
    color: #fff;
    border: none;
    padding: 5px 9px;
    border-radius: 50%;
    cursor: pointer;
    float: right;
}

.title {
    float: left;
}

.button {
    padding: 8px 16px;
    color: white;
    background-color: blue;
    border: none;
    border-radius: 6px;
    box-shadow: 0 0 10px -1px rgba(0, 0, 0, 0.5);
    cursor: crosshair;
    float: right;
}

input {
    text-anchor: left;
}
</style>

