<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { NavigationButton } from "./NavigationButtonType";

const props = defineProps<{
  drawer: boolean;
  navigationButtons: Array<NavigationButton>;
}>();

const route = useRoute();
const router = useRouter();

function navigateTo(link: string) {
  router.push(link);
}
</script>

<template>
  <v-navigation-drawer v-model="props.drawer">
    <v-list>
      <v-list-item>
        <v-list-item-title class="tw-font-bold tw-text-passive tw-text-xs">
          APPLICATIONS
        </v-list-item-title>
      </v-list-item>

      <v-list-item
        v-for="navigationButton in props.navigationButtons"
        :key="navigationButton.link"
        @click="navigateTo(navigationButton.link)"
        :class="{ 'tw-bg-nav-focused': route.path === navigationButton.link }"
        :ripple="false"
      >
        <slot :name="navigationButton.slotName"></slot>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
