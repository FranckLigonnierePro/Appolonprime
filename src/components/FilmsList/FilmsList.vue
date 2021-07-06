<template>
  <div class="container">
    <div v-if="loading">
      <p>Chargement en cours</p>
    </div>

    <div v-else>
      <Filtre :movies="films" />
      <div class="row">
        <div
          class="col-12 col-md-6 col-xl-3 p-5"
          v-for="film in films"
          v-bind:key="film.id"
        >
          <div class="card2" style="width: 16rem;">
            <router-link :to="'/FilmDetails/' + film.id" class="liensAccueil">
              <img
                v-bind:src="
                  'http://image.tmdb.org/t/p/w300/' + film.poster_path
                "
                class="card-img2"
                alt="affiche du film"
              />

              <div class="card-titre">
                <div class="title">
                  <h3>{{ film.title }}</h3>
                  <p>
                    <i class="fas fa-star text-warning"></i>
                    {{ film.vote_average }}
                  </p>
                </div>
                <router-link class="linkCarou" :to="'/FilmDetails/' + film.id" 
                  >Voir la fiche du film</router-link
                >
                <p class="trunc-text">{{ film.overview.substr(0, 200) }}...</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Filtre from "../Filtre.vue";
export default {
  name: "FilmsList",
  components: {
    Filtre,
  },
  props: ["films", "loading", "filmsNo"],
};
</script>

<style></style>
