<template>
  <div class="row">
    <div class="col-md-12 d-flex justify-content-center">
      <button
        v-on:click="classementAlphabet()"
        type="submit"
        value="submit"
        class="btn btn-primary mx-4"
      >
        Trier par ordre alphabetique
      </button>
      <button
        v-on:click="classementDate()"
        type="submit"
        value="submit"
        class="btn btn-primary mx-4"
      >
        Trier par date de sortie
      </button>
      <button
        v-on:click="classementTop()"
        type="submit"
        value="submit"
        class="btn btn-primary mx-4"
      >
        Trier par Note
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Filtre",
  props: ["movies"],
  data() {
    return {
      alphabet: false,
    };
  },
  methods: {
    classementAlphabet() {
      if (this.alphabet) {
        this.movies.sort((a, b) => {
          this.alphabet = false;
          if (a.title > b.title) return -1;
          if (a.title < b.title) return 1;
          return 0;
        });
      } else {
        this.movies.sort((a, b) => {
          this.alphabet = true;
          if (a.title < b.title) return -1;
          if (a.title > b.title) return 1;
          return 0;
        });
      }
    },
    classementDate() {
      if (this.alphabet) {
        this.movies.sort((a, b) => {
          this.alphabet = false;
          if (a.release_date > b.release_date) return -1;
          if (a.release_date < b.release_date) return 1;
          return 0;
        });
      } else {
        this.movies.sort((a, b) => {
          this.alphabet = true;
          if (a.release_date < b.release_date) return -1;
          if (a.release_date > b.release_date) return 1;
          return 0;
        });
      }
    },
    classementTop() {
      if (this.alphabet) {
        this.movies.sort((a, b) => {
          this.alphabet = false;
          if (a.vote_average > b.vote_average) return -1;
          if (a.vote_average < b.vote_average) return 1;
          return 0;
        });
      } else {
        this.movies.sort((a, b) => {
          this.alphabet = true;
          if (a.vote_average < b.vote_average) return -1;
          if (a.vote_average > b.vote_average) return 1;
          return 0;
        });
      }
    },
  },
};
</script>
