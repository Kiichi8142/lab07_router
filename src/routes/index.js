import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("../views/Home.vue");
const Shops = () => import("../views/Shops.vue");
const ShopDetail = () => import("../views/ShopDetail.vue");
const About = () => import("../views/About.vue");

const routes = [
	{ path: "/", component: Home },
	{ path: "/shops", component: Shops },
	{ path: "/shops/:id", component: ShopDetail },
	{ path: "/about", component: About },
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
