import type { routesType } from "./index";

import { IconImage } from "@arco-design/web-vue/es/icon";

export const constant: routesType[] = [
  {
    path: "/topng",
    name: "topng",
    meta: {
      title: "ICNS转PNG",
      icon: IconImage,
    },
    component: () => import("@/views/ToPNG/index.vue"),
  },
  {
    path: "/toico",
    name: "toico",
    meta: {
      title: "ICNS转ICO",
      icon: IconImage,
    },
    component: () => import("@/views/ToICO/index.vue"),
  },
];
