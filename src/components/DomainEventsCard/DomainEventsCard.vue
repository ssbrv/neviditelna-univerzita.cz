<script setup lang="ts">
import { DomainEvents } from "../../types/domain";
import DomainEventRender from "./DomainEventRender";
import CardWithHeader from "../CardWithHeader";

defineProps<{
  events: DomainEvents;
}>();
</script>
<template>
  <card-with-header title="Events">
    <v-row class="align-center ga-1" no-gutters>
      <DomainEventRender
        :event="events.registered"
        first-column-text="Create date:"
      />
      <v-responsive width="100%" />
      <DomainEventRender
        :event="events.updated"
        first-column-text="Update date:"
      />
      <v-responsive width="100%" />
      <DomainEventRender
        :event="events.transferred"
        first-column-text="Transfer date:"
      />
      <template v-if="events.unregistered">
        <v-responsive width="100%" />
        <DomainEventRender
          :event="events.unregistered"
          first-column-text="Delete date:"
        />
      </template>
    </v-row>
  </card-with-header>
</template>
