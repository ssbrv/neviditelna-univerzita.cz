<script setup lang="ts">
import { DomainContact } from "../../types/domain";
import CardWithHeader from "../CardWithHeader";
defineProps<{ contacts?: DomainContact[] }>();
</script>
<template>
  <CardWithHeader title="Administrative contacts">
    <v-row
      v-if="contacts && contacts.length"
      class="align-center ga-1"
      no-gutters
    >
      <template v-for="(contact, index) in contacts" :key="index">
        <v-col :cols="3">
          <strong>{{ contact.name }}:</strong>
        </v-col>
        <v-col>
          <p class="text-action">{{ contact.handle }}</p>
        </v-col>
        <v-responsive v-if="index !== contacts.length - 1" width="100%" />
      </template>
    </v-row>
    <i v-else>No contacts</i>
  </CardWithHeader>
</template>
