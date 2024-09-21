import { createApp } from "vue";
import App from "./App.vue";
import router from "./Router";

import "vuetify/styles";
import "./style.css";

import { vuetifyConfiguration } from "./VuetifyConfiguration";

createApp(App).use(router).use(vuetifyConfiguration).mount("#app");
