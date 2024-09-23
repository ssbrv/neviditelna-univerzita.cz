<script setup lang="ts">
import { DomainStateFlag } from "../../types/domain";
import CardWithHeader from "../CardWithHeader";
import DomainStateFlagWIthIcon from "../DomainStateFlagWithIcon";
const props = defineProps<{
  flags: DomainStateFlag[];
}>();

const activeFlags = props.flags.filter((flag) => flag.active);
</script>
<template>
  <CardWithHeader title="State flags">
    <v-row class="ga-1" no-gutters>
      <v-col class="d-flex flex-column ga-1">
        <DomainStateFlagWIthIcon
          v-for="flag in activeFlags"
          :key="flag.name"
          :state-flag="flag"
        />
      </v-col>
    </v-row>
  </CardWithHeader>
</template>
