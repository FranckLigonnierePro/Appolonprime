import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import routes from "./routes";
import VueYoutubeEmbed from "vue-youtube-embed";

Vue.use(VueYoutubeEmbed, { global: true, componentId: "youtube-media" });

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
