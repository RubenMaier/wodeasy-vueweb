import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/routine",
    name: "Routine",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Routine.vue")
  },
  {
    path: "/converter",
    name: "Converter",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Converter.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
