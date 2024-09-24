import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import { aliases, mdi } from "vuetify/iconsets/mdi-svg";
import {
  mdiAccountCircle,
  mdiEarth,
  mdiLogout,
  mdiEye,
  mdiEyeOff,
  mdiCheckboxMarkedCircle,
  mdiCloseCircle,
  mdiAlertCircle,
} from "@mdi/js";

const customLightTheme = {
  colors: {
    background: "#FAFAFA",
    primary: "#FFFFFF",
    secondary: "#EEEEEE",
    action: "#2196F3",
    failure: "#DC143C",
    success: "#32CD32",
    passive: "#787878",
    focused: "#FFC107",
  },
};

export const vuetify = createVuetify({
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
      logout: mdiLogout,
      hide: mdiEyeOff,
      show: mdiEye,
      successCircle: mdiCheckboxMarkedCircle,
      failCircle: mdiCloseCircle,
      errorCircle: mdiAlertCircle,
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
