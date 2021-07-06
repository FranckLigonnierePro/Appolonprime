<template>
  <div class="container">
    <div class="row filmDetails d-flex">
      <div class="col-md-6 my-4 ">
        <img
          v-bind:src="'https://image.tmdb.org/t/p/w300' + film.poster_path"
          class="posterDetails"
          alt="Poster du film"
        />
      </div>
      <div class="col-md-6 my-4 d-flex flex-column justify-content-between">
        <h2 class="text-center fw-bold">{{ film.title }}</h2>
        <h4 class="text-center">" {{ film.tagline }} "</h4>
        <div class="d-flex justify-content-between">
          <h6>
            Sortie le :
            <span class="fw-bold">{{ film.release_date | moment }}</span>
          </h6>
          <p>
            <i class="fas fa-star text-warning"></i> {{ film.vote_average }}
          </p>
        </div>
        <div class="d-flex justify-content-around">
          <div v-for="genre in genres" v-bind:key="genre.id">
            <p class="fw-bold">{{ genre.name }}</p>
          </div>
        </div>
        <p class="overview">{{ film.overview }}</p>
        <div class="ytb">
          <youtube-media :video-id="video.key"></youtube-media>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="d-flex flex-wrap justify-content-between my-5">
        <div v-for="leCast in toutLeCasts" v-bind:key="leCast.id">
          <div class="profileCard text-center p-1">
            <img
              v-bind:src="
                'https://image.tmdb.org/t/p/w300' + leCast.profile_path
              "
              class="profilePic"
              alt="image de l'acteur"
            />
            <p class="my-2">
              {{ leCast.character }} :<br />
              {{ leCast.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  data() {
    return {
      moment,
      toutLeCasts: [],
      genres: [],
      video: [],
      film: [],
      loading: true,
    };
  },
  created() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          this.$route.params.id +
          "/videos?api_key=74459da234d3f7b5e07e1a06016ff750&language=fr-FR"
      )
      .then((res) => {
        this.loading = false;
        this.video = res.data.results[0];

        axios
          .get(
            "https://api.themoviedb.org/3/movie/" +
              this.$route.params.id +
              "?api_key=74459da234d3f7b5e07e1a06016ff750&&append_to_response=credits&language=fr-FR"
          )
          .then((res) => {
            this.loading = false;
            this.film = res.data;
            this.genres = res.data.genres;
            let castings = res.data.credits;
            this.toutLeCasts = castings.cast.slice(0, 10);
          });
      });
  },
  filters: {
    moment: function(date) {
      return moment(date).format("DD-MM-YYYY");
    },
  },
};
</script>
