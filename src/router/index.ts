import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from "vue-router";
import Layout from "@/layout/index.vue";
import { constant } from "./constant";
export type routesType = RouteRecordRaw & {
  meta?: {
    icon: any;
    title: string;
  };
  children?: routesType[];
};

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Layout,
      redirect: constant[0].path,
      children: [...constant],
    },
  ],
});

export default router;
