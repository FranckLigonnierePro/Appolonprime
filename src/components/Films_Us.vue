<template>
  <div class="films">
    <h1>Les films Americains les plus populaires</h1>
    <FilmsList :films="movies" :loading="loading" />
  </div>
</template>

<script>
import FilmsList from "./FilmsList/FilmsList.vue";
import axios from "axios";

export default {
  name: "Film_Us",
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
        "https://api.themoviedb.org/3/discover/movie?api_key=74459da234d3f7b5e07e1a06016ff750&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_original_language=en&language=fr-FR"
      )
      .then((res) => {
        this.loading = false;
        this.movies = res.data.results;
      });
  },
};
</script>
