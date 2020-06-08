import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import City from "@/views/City"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/city",
    name: "City",
    component: City
  }
];

const router = new VueRouter({
  routes
});

export default router;
