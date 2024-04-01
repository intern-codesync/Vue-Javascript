import { createRouter, createWebHistory } from "vue-router";
import Modal from "../components/Modal.vue";
import About from "../components/About.vue";
import Service from "../components/Service.vue";
import PracticeRoute from "@/components/PracticeRoute.vue";
import Navbar from "../components/Navbar.vue";
import Data from '../View/Data.vue'
import Second from "@/View/Second.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  
    // {
    //   path: "/modal",
    //   name: "modal",
    //   component: Modal,
    // },
    // {
    //   path: "/navbar",  
    //   name: "Navbar",
    //   component: Navbar,
    // },
    // {
    //   path: "/about",
    //   name: "About",
    //   component: About,
    // },
    // {
    //   path: "/about/:id",
    //   name: "second",
    //   component: Second,
    // },
    // {
    //   path: "/service",
    //   name: "Service",
    //   component: Service,
    // },
    // {
    //   path: "/route",
    //   name: "Routes",
    //   component: PracticeRoute,
    // },
    // {
    //   path: "/logo",
    //   name: "Logo",
    //   component: () => import("../components/Logo.vue"),
    // },
    // {
    //   path: "/contact",
    //   name: "Contact",
    //   component: () => import("../components/Contact.vue"),
    // },
    // {
    //   path: "/contact/:id",
    //   name: "Data",
      // component: Data,
    // },
    // {
    //   path: '/tabs/:id', 
    //   name: 'tabs',
    //   component: Tabs,
    // },
  ],
});

export default router;
