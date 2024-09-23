<script setup lang="ts">
import { ref } from "vue";
import TopBar from "../../components/TopBar";
import NavigationDrawer from "../../components/NavigationDrawer";
import NavigationButtonDefault from "../../components/NavigationDrawer/NavigationButtonDefault";

const drawer = ref(false);
function toggleDrawer() {
  drawer.value = !drawer.value;
}

const slotNames: Array<string> = ["registry"];
</script>

<template>
  <TopBar :onToggleDrawer="toggleDrawer" />
  <NavigationDrawer :drawer="drawer" :slot-names="slotNames">
    <template v-slot:registry>
      <NavigationButtonDefault
        text="Registry"
        icon="$earth"
        path-segment="domains"
        :path-level="1"
      />
    </template>
  </NavigationDrawer>

  <v-main>
    <router-view class="px-8 py-8" />
  </v-main>
</template>
