<script setup lang="ts">
import { type DomainKeySet } from '../../types/domain'
import CardWithHeader from '../CardWithHeader'
defineProps<{ keySet: DomainKeySet }>()
</script>
<template>
  <CardWithHeader title="KeySet">
    <v-row class="align-center ga-1" no-gutters>
      <v-col :cols="3">
        <strong>Handle:</strong>
      </v-col>
      <v-col>
        <p class="text-action">{{ keySet.handle }}</p>
      </v-col>
      <v-responsive width="100%" />
      <v-col :cols="3">
        <strong>Registrar:</strong>
      </v-col>
      <v-col>
        <p class="text-action">{{ keySet.registrar }}</p>
      </v-col>
      <v-responsive width="100%" />
      <v-col :cols="3">
        <strong>DNS keys:</strong>
      </v-col>
      <v-col>
        <p v-for="dnsKey in keySet.dns_keys" :key="dnsKey">
          {{ dnsKey }}
        </p>
      </v-col>
    </v-row>
  </CardWithHeader>
</template>
