<template>
  <header class="header">
    <h1>Todo-Liste</h1>

    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>


<style scoped>
.header {
  background: rgb(107, 105, 105);
  color: #fff;
  text-align: center;
  padding: 10px;
}

.header a {
  color: #fff;
  padding-right: 5px;
}
</style>

