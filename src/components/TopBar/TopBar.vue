<script setup lang="ts">
import { User } from "../../types";

const props = defineProps<{
  onToggleDrawer: () => void;
  user: User;
}>();
</script>

<template>
  <v-app-bar class="!tw-bg-action !tw-text-primary">
    <v-app-bar-nav-icon
      class="tw-btn"
      :ripple="false"
      variant="text"
      @click.stop="props.onToggleDrawer"
    />

    <v-toolbar-title>Ferda</v-toolbar-title>

    <v-spacer />

    <v-btn class="tw-btn" prepend-icon="$accountCircle">
      <template v-slot:prepend>
        <v-icon size="x-large" />
      </template>
      {{ props.user.firstName + " " + props.user.lastName }}
    </v-btn>
  </v-app-bar>
</template>
