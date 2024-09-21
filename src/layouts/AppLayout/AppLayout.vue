<script setup lang="ts">
import { ref, inject } from "vue";
import TopBar from "../../components/TopBar";
import NavigationDrawer, {
  NavigationButton,
} from "../../components/NavigationDrawer";
import NavigationButtonDefault from "../../components/NavigationDrawer/NavigationButtonDefault";
import { User } from "../../types";

const user: User = inject("user") as User;

const drawer = ref(false);
function toggleDrawer() {
  drawer.value = !drawer.value;
}

const navigationButtons: Array<NavigationButton> = [
  { link: "/domain-detail", slotName: "registry" },
];
</script>
<template>
  <TopBar :onToggleDrawer="toggleDrawer" :user="user" />
  <NavigationDrawer :drawer="drawer" :navigationButtons="navigationButtons">
    <template v-slot:registry>
      <NavigationButtonDefault text="Registry" icon="$earth" />
    </template>
  </NavigationDrawer>

  <v-main>
    <router-view class="tw-p-8" />
  </v-main>
</template>
