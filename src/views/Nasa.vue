<template>
  <div class="nasa">
    <h1>NASA</h1>
    <h3>Durchsuche die NASA Bilder-Datenbank - z.B. "sun", "moon","space shuttle", "milky way" ...</h3>
    <form v-on:submit.prevent="getResult(query)">
      <input class="custom" type="text" v-model="query" placeholder="Search here ...">
    </form>

    <div v-if="results">
      <div v-bind:key="index" v-for="(result,index) in results">
        <img v-bind:src="result.links[0].href">
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "nasa",
  data() {
    return {
      msg: "nasa",
      query: "",
      results: ""
    };
  },
  methods: {
    getResult(query) {
      //   alert(query);

      axios
        .get(
          "https://images-api.nasa.gov/search?q=" + query + "&media_type=image"
        )
        .then(response => {
          //console.log(response.data.collection.items);
          this.results = response.data.collection.items;
        });
    }
  }
};
</script>

<style scoped>
.custom {
  width: 300px;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}
</style>
