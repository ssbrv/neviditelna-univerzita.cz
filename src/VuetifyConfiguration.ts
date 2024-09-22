import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import { aliases, mdi } from "vuetify/iconsets/mdi-svg";
import { mdiAccountCircle, mdiEarth, mdiCog, mdiLogout } from "@mdi/js";

export const vuetifyConfiguration = createVuetify({
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
      earth: mdiEarth,
      cog: mdiCog,
      logout: mdiLogout,
    },
    sets: {
      mdi,
    },
  },
});
