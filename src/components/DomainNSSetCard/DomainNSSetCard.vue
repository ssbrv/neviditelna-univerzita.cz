<script setup lang="ts">
import { DomainNSSet } from "../../types/domain";
import CardWithHeader from "../CardWithHeader";
defineProps<{ nsSet: DomainNSSet }>();
</script>
<template>
  <CardWithHeader title="NSSet">
    <v-row class="align-center ga-1" no-gutters>
      <v-col :cols="3">
        <strong>Handle:</strong>
      </v-col>
      <v-col>
        <p class="text-action">{{ nsSet.handle }}</p>
      </v-col>
      <v-responsive width="100%" />
      <v-col :cols="3">
        <strong>Registrar:</strong>
      </v-col>
      <v-col>
        <p class="text-action">{{ nsSet.registrar }}</p>
      </v-col>
      <v-responsive width="100%" />
      <v-col :cols="3">
        <strong>DNS:</strong>
      </v-col>
      <v-col>
        <p v-for="dns in nsSet.dns" :key="dns.name">
          {{ dns.name }} ({{ dns.ip_address }})
        </p>
      </v-col>
    </v-row>
  </CardWithHeader>
</template>
