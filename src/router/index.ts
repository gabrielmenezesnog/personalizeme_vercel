import { createRouter, createWebHistory } from "vue-router";

const Homepage = () => import("../views/homepage/Homepage.vue");
const CurriculumEdit = () =>
  import("../views/curriculum-edit/CurriculumEdit.vue");

const routes = [
  {
    path: "/",
    name: "home",
    component: Homepage,
  },
  {
    path: "/editar/:id?",
    name: "editar",
    component: CurriculumEdit,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
