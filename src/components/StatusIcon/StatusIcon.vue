<script setup lang="ts">
defineProps<{ status: boolean; iconTrue: string; iconFalse: string }>()
</script>
<template>
  <v-icon
    data-testid="StatusIconVIcon"
    :icon="status ? iconTrue : iconFalse"
    :class="status ? 'text-success' : 'text-failure'"
  />
</template>
