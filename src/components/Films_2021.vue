<template>
  <div class="films">
    <h1>Les meilleurs films de 2021</h1>
    <FilmsList :films="movies" :loading="loading" />
  </div>
</template>

<script>
import FilmsList from "./FilmsList/FilmsList.vue";
import axios from "axios";

export default {
  name: "Films_2021",
  components: {
    FilmsList,
  },
  data() {
    return {
      movies: [],
      loading: true,
    };
  },
  created() {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie/?api_key=74459da234d3f7b5e07e1a06016ff750&primary_release_year=2021&sort_by=popularity.desc&language=fr-FR&page=1"
      )
      .then((res) => {
        this.loading = false;
        this.movies = res.data.results;
      });
  },
};
</script>
