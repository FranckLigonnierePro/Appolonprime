<template>
  <div>
    <nav class="navbar navbar-expand-xl navbar-light fixed-top my-xl-0 my-5">
      <div class="container-fluid lanav">
        <span class="navbar-brand"
          >Appolon<span class="text-primary">prime</span></span
        >

        <button
          class="navbar-toggler custom-toggler"
          onclick="this.blur();"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mx-5">
            <li class="nav-item">
              <router-link class="liens" to="/">Accueil</router-link>
            </li>
            <li class="nav-item">
              <router-link class="liens" to="/Films_2021"
                >Les films de 2021</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="liens" to="/Films_Us"
                >Les films Americains</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="liens" to="/Films_Fr"
                >Les films Français</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="liens" to="/Top_50"
                >Le top 50 des films</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>
