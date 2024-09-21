import { createApp } from "vue";
import App from "./App.vue";
import router from "./Router";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import "./style.css";

import { aliases, mdi } from "vuetify/iconsets/mdi-svg";
import { mdiAccountCircle } from "@mdi/js";

const vuetify = createVuetify({
  components,
  directives,
  defaults: {
    VBtn: {
      ripple: false,
    },
  },
  icons: {
    defaultSet: "mdi",
    aliases: {
      ...aliases,
      accountCircle: mdiAccountCircle,
    },
    sets: {
      mdi,
    },
  },
});

createApp(App).use(router).use(vuetify).mount("#app");
