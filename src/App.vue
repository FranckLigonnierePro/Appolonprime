<template>
  <div id="app">
    <Header />

    <div class="row">
      <div class="col-xl-3 offset-xl-9 fixed-top searchBar">
        <form class="d-flex mt-3 mt-xl-2 ">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Recherche"
            aria-label="Recherche"
            v-model="query"
            @keyup="getResult(query)"
          />
          <button class="btn text-primary" type="submit">
            <i class="fas fa-search"></i>
          </button>
        </form>
      </div>
    </div>

    <div class="container-fluid">
      <div v-if="query">
        <FilmsList :films="films" :loading="loading" />
      </div>

      <div v-else-if="$route.path == '/'">
        <carousel
          :autoplay="true"
          :slideSpeed="8000"
          :autoplaySpeed="1000"
          :nav="false"
          :items="1"
          :dots="false"
          :center="true"
          class="d-flex col-md-12 carouhead"
        >
          <div
            class="imgCar"
            v-bind:style="{
              'background-image': 'url(' + require('./assets/bw.jpg') + ')',
            }"
          ></div>
          <div
            class="imgCar"
            v-bind:style="{
              'background-image': 'url(' + require('./assets/cru.jpg') + ')',
            }"
          ></div>
          <div
            class="imgCar"
            v-bind:style="{
              'background-image': 'url(' + require('./assets/ff9.jpg') + ')',
            }"
          ></div>
          <div
            class="imgCar"
            v-bind:style="{
              'background-image': 'url(' + require('./assets/inf.jpg') + ')',
            }"
          ></div>
          <div
            class="imgCar"
            v-bind:style="{
              'background-image': 'url(' + require('./assets/lucas.jpg') + ')',
            }"
          ></div>
        </carousel>

        <div class="d-flex flex-column my-3">
          <div class="d-flex align-items-center carouNews">
            <h2>Les derniers films de 2021</h2>
            <router-link class="liensAccueil" to="/Films_2021"
              >Voir</router-link
            >
          </div>
          <CarouselFilmsList :films="movies2020" :loading="loading" />
        </div>

        <div class="d-flex flex-column my-3">
          <div class="d-flex align-items-center carouNews">
            <h2>Les derniers films Francais</h2>
            <router-link class="liensAccueil" to="/Films_Fr">Voir</router-link>
          </div>
          <CarouselFilmsList :films="moviesFr" :loading="loading" />
        </div>

        <div class="d-flex flex-column my-3">
          <div class="d-flex align-items-center carouNews">
            <h2>Les derniers films Americains</h2>
            <router-link class="liensAccueil" to="/Films_Us">Voir</router-link>
          </div>
          <CarouselFilmsList :films="moviesUs" :loading="loading" />
        </div>

        <div class="d-flex flex-column my-3">
          <div class="d-flex align-items-center carouNews">
            <h2>Le Top 50 des meillieurs films</h2>
            <router-link class="liensAccueil" to="/Top_50">Voir</router-link>
          </div>
          <CarouselFilmsList :films="moviesTop" :loading="loading" />
        </div>
      </div>

      <div v-else>
        <router-view :key="$route.fullPath"></router-view>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import CarouselFilmsList from "./components/FilmsList/CarouselFilmsList.vue";
import FilmsList from "./components/FilmsList/FilmsList.vue";
import axios from "axios";
import carousel from "vue-owl-carousel";

let one =
  "https://api.themoviedb.org/3/discover/movie/?api_key=74459da234d3f7b5e07e1a06016ff750&primary_release_year=2021&sort_by=popularity.desc&language=fr&page=1";
let two =
  "https://api.themoviedb.org/3/discover/movie?api_key=74459da234d3f7b5e07e1a06016ff750&language=fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_original_language=en&language=fr-FR";
let three =
  "https://api.themoviedb.org/3/discover/movie?api_key=74459da234d3f7b5e07e1a06016ff750&language=fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_original_language=fr";
let four =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=74459da234d3f7b5e07e1a06016ff750&language=fr&page=1";

export default {
  name: "App",
  components: {
    FilmsList,
    Header,
    Footer,
    CarouselFilmsList,
    carousel,
  },
  data() {
    return {
      query: "",
      films: [],
      movies2020: [],
      moviesUs: [],
      moviesFr: [],
      moviesTop: [],
      loading: true,
    };
  },
  created() {
    const axiosrequest1 = axios.get(one);
    const axiosrequest2 = axios.get(two);
    const axiosrequest3 = axios.get(three);
    const axiosrequest4 = axios.get(four);

    axios
      .all([axiosrequest1, axiosrequest2, axiosrequest3, axiosrequest4])
      .then(
        axios.spread((...res) => {
          this.loading = false;
          this.movies2020 = res[0].data.results;
          this.moviesUs = res[1].data.results;
          this.moviesFr = res[2].data.results;
          this.moviesTop = res[3].data.results;
        })
      );
  },
  methods: {
    getResult(query) {
      axios
        .get(
          "https://api.themoviedb.org/3/search/movie?api_key=74459da234d3f7b5e07e1a06016ff750&query=" +
            query +
            "&language=fr"
        )
        .then((response) => {
          this.loading = false;
          this.films = response.data.results;
        });
    },
  },
};
</script>

<style>
@import "assets/style.css";
</style>
