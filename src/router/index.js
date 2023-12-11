import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import InventoryView from "../views/InventoryView.vue";
import InsightsView from "../views/InsightsView.vue";
import AutomationsView from "../views/AutomationsView.vue";
import ProfileView from "../views/ProfileView.vue";
import ClientsView from "../views/ClientsView.vue";
import LoginView from "../views/LoginView.vue";

const routes = [
  {
    path: "/sales",
    name: "SalesView",
    component: HomeView
  },
  {
    path: "/clients",
    name: "ClientsView",
    component: ClientsView
  },
  {
    path: "/inventory",
    name: "InventoryView",
    component: InventoryView
  },
  {
    path: "/insights",
    name: "InsightsView",
    component: InsightsView
  },
  {
    path: "/automation",
    name: "AutomationsView",
    component: AutomationsView
  },
  {
    path: "/profile",
    name: "ProfileView",
    component: ProfileView
  },
  {
    path: "/login",
    name: "LoginView",
    component: LoginView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
