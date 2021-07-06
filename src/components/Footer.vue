<template>
  <div>
    <footer class="text-center text-lg-start text-white">
      <section
        class="d-flex justify-content-center justify-content-lg-between p-1"
      ></section>

      <section class="">
        <div class="container text-center text-md-start mt-5">
          <div class="row mt-3">
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <span>Appolon<span class="text-primary">prime</span></span>
              <p>
                Tout pleins de films rien que pour vous !
              </p>
            </div>

            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">
                Liens Utiles
              </h6>
              <p>
                <router-link class="liens" to="/Films_2020"
                  >Les films de 2020</router-link
                >
              </p>
              <p>
                <router-link class="liens" to="/Films_Us"
                  >Les films Americains</router-link
                >
              </p>
              <p>
                <router-link class="liens" to="/Films_Fr"
                  >Les films Français</router-link
                >
              </p>
              <p>
                <router-link class="liens" to="/Top_50"
                  >Le top 50 des films</router-link
                >
              </p>
            </div>

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 class="text-uppercase fw-bold mb-4">
                Contact
              </h6>
              <p><i class="fas fa-home me-3"></i> New York, NY 10012, US</p>
              <p>
                <i class="fas fa-envelope me-3"></i>
                info@example.com
              </p>
              <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
              <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
            </div>
          </div>
        </div>
      </section>

      <div
        class="text-center p-4"
        style="background-color: rgba(0, 0, 0, 0.05);"
      >
        © 2021 Copyright:
        <a class="text-reset " href="/">appolonprime.com</a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>
