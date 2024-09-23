<script setup lang="ts">
import { DomainEvent } from "../../../types/domain";
import { formatDateTimeToEnUs } from "../../../utils/formatters";

defineProps<{
  event: DomainEvent;
  firstColumnText: string;
}>();
</script>
<template>
  <v-col :cols="3">
    <strong>{{ firstColumnText }}</strong>
  </v-col>
  <v-col>
    {{ formatDateTimeToEnUs(event.timestamp) }}
  </v-col>
  <v-col :cols="2">
    <strong>Registrar:</strong>
  </v-col>
  <v-col class="text-action">
    <time>{{ event.registrar_handle }}</time>
  </v-col>
</template>
