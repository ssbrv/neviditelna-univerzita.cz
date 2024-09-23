<script setup lang="ts">
import { DomainContact } from "../../types/domain";
import CardWithHeader from "../CardWithHeader";
import StatusIcon from "../StatusIcon";
defineProps<{ contact: DomainContact; title: string }>();
</script>
<template>
  <CardWithHeader :title="title">
    <v-row class="align-center ga-1" no-gutters>
      <v-col :cols="1" />
      <v-col :cols="4">
        <strong>Handle:</strong>
      </v-col>
      <v-col>
        <p class="text-action">{{ contact.handle }}</p>
      </v-col>
      <v-responsive width="100%" />
      <v-col :cols="1">
        <StatusIcon
          :status="contact.publish.organization"
          icon-false="$hide"
          icon-true="$show"
        />
      </v-col>
      <v-col :cols="4">
        <strong>Organization:</strong>
      </v-col>
      <v-col>
        <p>{{ contact.organization }}</p>
      </v-col>
      <v-responsive width="100%" />
      <v-col :cols="1">
        <StatusIcon
          :status="contact.publish.name"
          icon-false="$hide"
          icon-true="$show"
        />
      </v-col>
      <v-col :cols="4">
        <strong>Name:</strong>
      </v-col>
      <v-col>
        <p>{{ contact.name }}</p>
      </v-col>
    </v-row>
  </CardWithHeader>
</template>
