<template>
  <div class="container-fluid">
    <div v-if="loading">
      <p>Chargement en cours</p>
    </div>

    <div v-else>
      <div class="row d-flex align-items-center">
        <slick ref="slick" :options="slickOptions">
          <div class="allCard" v-for="film in films" v-bind:key="film.id">
            <div class="card">
              <div
                class="card-img imgTop"
                alt="poster du film"
                :style="{
                  'background-image': `url(http://image.tmdb.org/t/p/w300/${film.backdrop_path})`,
                }"
              >
                <div
                  class="card-img imgBack"
                  alt="poster du film"
                  :style="{
                    'background-image': `url(http://image.tmdb.org/t/p/w300/${film.poster_path})`,
                  }"
                >
                  <div class="card-titre">
                    <div class="title">
                      <h3>{{ film.title }}</h3>
                      <p>
                        <i class="fas fa-star text-warning"></i>
                        {{ film.vote_average }}
                      </p>
                    </div>
                    <router-link
                      class="linkCarou text-center"
                      :to="'/FilmDetails/' + film.id"
                      >Voir la fiche du film</router-link
                    >
                    <p class="trunc-text">{{ film.overview.substr(0, 200)}}...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </slick>
      </div>
    </div>
  </div>
</template>

<script>
import Slick from "vue-slick";
import "slick-carousel/slick/slick.css";

export default {
  name: "FilmsList",
  components: {
    Slick,
  },
  data() {
    return {
      slickOptions: {
        arrows: true,
        infinite: false,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        prevArrow:
          '<span class="prev"><i class="fas fa-arrow-circle-left"></i></i></span>',
        nextArrow:
          '<span class="next"><i class="fas fa-arrow-circle-right"></i></i></span>',
        responsive: [
          {
            breakpoint: 1575,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 1310,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1064,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 806,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 550,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ],
      },
    };
  },
  props: ["films", "loading"],
};
</script>

<style></style>
