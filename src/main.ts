import { createApp } from "vue";
import Arco from "@arco-design/web-vue";
import App from "./App.vue";
import router from "./router";

import "@/assets/styles/initialize.scss";
import "@/assets/styles/reset.scss";
import "@arco-design/web-vue/dist/arco.css";
createApp(App).use(Arco).use(router).mount("#app");
