<script setup lang="ts">
import { inject } from "vue";
import { User } from "../../types";
import UserMenu from "../UserMenu";

const user: User = inject("user") as User;

const props = defineProps<{
  onToggleDrawer: () => void;
}>();

const menuActivatorId = "menu-activator";
</script>

<template>
  <v-app-bar class="!tw-bg-action !tw-pr-3 !tw-text-primary">
    <v-app-bar-nav-icon
      class="tw-btn"
      :ripple="false"
      variant="text"
      @click.stop="props.onToggleDrawer"
    />

    <v-toolbar-title>Ferda</v-toolbar-title>

    <v-spacer />

    <v-btn class="tw-btn" :id="menuActivatorId">
      <template v-slot:prepend>
        <v-icon icon="$accountCircle" size="x-large" />
      </template>
      {{ user.firstName + " " + user.lastName }}
    </v-btn>
    <UserMenu :user="user" :activator="'#' + menuActivatorId" />
  </v-app-bar>
</template>
