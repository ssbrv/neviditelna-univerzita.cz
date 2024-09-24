<script setup lang="ts">
defineProps<{ title?: string }>()
</script>
<template>
  <v-card class="shadow-md oblong">
    <v-card-title v-if="title" class="bg-secondary mb-4">
      {{ title }}
    </v-card-title>
    <v-card-text>
      <slot></slot>
    </v-card-text>
  </v-card>
</template>
