import Films_2021 from "./components/Films_2021.vue";
import Films_Us from "./components/Films_Us.vue";
import Films_Fr from "./components/Films_Fr.vue";
import Top_50 from "./components/Top_50.vue";
import FilmDetails from "./components/Details/FilmDetails.vue";

export default [
  {
    path: "/Films_2021",
    component: Films_2021,
  },
  {
    path: "/Films_Us",
    component: Films_Us,
  },
  {
    path: "/Films_Fr",
    component: Films_Fr,
  },
  {
    path: "/Top_50",
    component: Top_50,
  },
  {
    path: "/FilmDetails/:id",
    component: FilmDetails,
  },
];
