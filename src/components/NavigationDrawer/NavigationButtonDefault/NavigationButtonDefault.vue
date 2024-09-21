<script setup lang="ts">
const navigationButton = defineProps<{
  icon: string;
  text: string;
}>();
</script>

<template>
  <div class="tw-flex tw-gap-6 tw-items-center">
    <v-icon
      class="tw-text-passive"
      :icon="navigationButton.icon"
      size="large"
    />
    <v-list-item-title class="tw-font-bold tw-text-sm">
      {{ navigationButton.text }}
    </v-list-item-title>
  </div>
</template>
