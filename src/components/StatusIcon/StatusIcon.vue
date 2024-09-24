<script setup lang="ts">
defineProps<{ status: boolean; iconTrue: string; iconFalse: string }>()
</script>
<template>
  <v-icon :icon="status ? iconTrue : iconFalse" :class="status ? 'text-success' : 'text-failure'" />
</template>
