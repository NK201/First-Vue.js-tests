<template>
    <div class="todo-item" vbind-class="{is-complete}">
        <div class="title">
            {{todo.id}} &nbsp; {{todo.title}}

        </div>

        <button class="button">Remove</button>
        <input type="checkbox" v-model="todo.completed">
    </div>
</template>

<script>
export default {
    name: "TodoItem",
    props: { todo: { type: Object, required: true } }
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

.is-complete {
    text-decoration: line-through;
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
    float: right;
}
</style>

