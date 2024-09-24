<script setup lang="ts">
import type { DomainStateFlag, DomainStateFlags } from '../../types/domain'
import CardWithHeader from '../CardWithHeader'
import DomainStateFlagWIthIcon from '../DomainStateFlagWithIcon'
const props = defineProps<{
  flags: DomainStateFlags
}>()

function groupStateFlags(): DomainStateFlag[][] {
  const flagGroupMap = new Map<string, number>()
  props.flags.groups.forEach((group, index) => {
    group.forEach((flagName) => {
      flagGroupMap.set(flagName, index)
    })
  })

  const groupedFlags: DomainStateFlag[][] = Array.from(
    { length: props.flags.groups.length },
    () => []
  )
  const flagsWithNoGroup: DomainStateFlag[] = []

  props.flags.flags.forEach((flag) => {
    const groupIndex = flagGroupMap.get(flag.name)

    if (groupIndex === undefined) {
      flagsWithNoGroup.push(flag)
      return
    }

    groupedFlags[groupIndex].push(flag)
  })

  if (flagsWithNoGroup.length) groupedFlags.push(flagsWithNoGroup)

  return groupedFlags
}

const groupedFlags = groupStateFlags()
</script>
<template>
  <CardWithHeader title="State flags">
    <v-row class="ga-1" no-gutters>
      <v-col
        v-for="(flagGroup, index) in groupedFlags"
        :key="index"
        class="d-flex flex-column ga-1"
      >
        <DomainStateFlagWIthIcon v-for="flag in flagGroup" :key="flag.name" :state-flag="flag" />
      </v-col>
    </v-row>
  </CardWithHeader>
</template>
