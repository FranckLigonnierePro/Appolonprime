<template>
  <div class="films">
    <h1>Top 50 des meilleurs films de tout les temps</h1>
    <FilmsList :films="movies" :loading="loading" :filmsNo="index" />
  </div>
</template>

<script>
import FilmsList from "./FilmsList/FilmsList.vue";
import axios from "axios";

let one =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=74459da234d3f7b5e07e1a06016ff750&language=fr&page=1";
let two =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=74459da234d3f7b5e07e1a06016ff750&language=fr&page=2";
let three =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=74459da234d3f7b5e07e1a06016ff750&language=fr&page=3";

export default {
  name: "Top_50",
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
    const axiosrequest1 = axios.get(one);
    const axiosrequest2 = axios.get(two);
    const axiosrequest3 = axios.get(three);

    axios.all([axiosrequest1, axiosrequest2, axiosrequest3]).then(
      axios.spread((...res) => {
        const response1 = res[0].data.results;
        const response2 = res[1].data.results;
        const response3 = res[2].data.results.slice(12);
        const tableaufilms = response1.concat(response2, response3);
        this.loading = false;
        this.movies = tableaufilms;
      })
    );
  },
};
</script>
