import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import { aliases, mdi } from "vuetify/iconsets/mdi-svg";
import { mdiAccountCircle, mdiEarth, mdiCog, mdiLogout } from "@mdi/js";

const customLightTheme = {
  colors: {
    background: "#FAFAFA",
    primary: "#FFFFFF",
    secondary: "#EEEEEE",
    action: "#2196F3",
    failure: "#DC143C",
    success: "#32CD32",
    passive: "#787878",
    link: "#99CAF9",
    focused: "#FFC107",
  },
};

export const vuetifyConfiguration = createVuetify({
  components,
  directives,
  defaults: {
    global: {
      ripple: false,
      elevation: 0,
      rounded: false,
    },
  },
  icons: {
    defaultSet: "mdi",
    aliases: {
      ...aliases,
      accountCircle: mdiAccountCircle,
      earth: mdiEarth,
      cog: mdiCog,
      logout: mdiLogout,
    },
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: "customLightTheme",
    themes: {
      customLightTheme,
    },
  },
});
