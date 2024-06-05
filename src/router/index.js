import { createRouter, createWebHistory } from "vue-router"

import HomeView from "../views/00-HomeView.vue"

import AboutView from "../views/01-AboutView.vue"
import TheHumanView from "../views/01.1-TheHumanView.vue"
import TheDesignerView from "../views/01.2-TheDesignerView.vue"
import TheMusicianView from "../views/01.3-TheMusicianView.vue"


import PortfolioView from "../views/02-PortfolioView.vue"
import PortfolioDetail from "../views/02.1-PortfolioDetail.vue"
import PortfolioDetailAxel from "../views/02.2-PortfolioDetailAxel.vue"
import CreaPortfolioView from "../views/03-CreaPortfolioView.vue"

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
    path: "/about/thehuman",
    name: "thehuman",
    component: TheHumanView,
  },

  {
    path: "/about/thedesigner",
    name: "thedesigner",
    component: TheDesignerView,
  },

  {
    path: "/about/themusician",
    name: "themusician",
    component: TheMusicianView,
  },

    {
      path: "/designportfolio",
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
      path: "/creativeportfolio",
      name: "creativeportfolio",
      component: CreaPortfolioView,
    },

    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
  ],
})

export default router
