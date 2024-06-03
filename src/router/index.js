import { createRouter, createWebHistory } from "vue-router"

import HomeView from "../views/00-HomeView.vue"

import AboutView from "../views/01-AboutView.vue"

import PortfolioView from "../views/02-PortfolioView.vue"
import PortfolioDetail from "../views/02.1-PortfolioDetail.vue"
import PortfolioDetailAxel from "../views/02.2-PortfolioDetailAxel.vue"
import ManifestoView from "../views/03-ManifestoView.vue"

import ContactView from "../views/04-ContactView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: PortfolioView,
    },
    {
      path: "/portfolio/:label",
      name: "portfolioitem",
      component: PortfolioDetail,
    },

    {
      path: "/portfolio/axel2",
      name: "portfolioitemaxel2",
      component: PortfolioDetailAxel,
    },

    {
      path: "/manifesto",
      name: "manifesto",
      component: ManifestoView,
    },

    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
  ],
})

export default router
