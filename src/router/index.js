import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ArticleAdder from "../components/ArticleAdder";
import ArticleShow from "../views/ArticleShow.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/articleadder",
    name: "ArticleAdder",
    component: ArticleAdder
  },
  {
    path: "/articleshow",
    name: "ArticleShow",
    component: ArticleShow,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
