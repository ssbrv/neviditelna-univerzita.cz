<script setup lang="ts">
import type { DomainStateFlag } from '../../types/domain'
import StatusIcon from '../StatusIcon'
defineProps<{ stateFlag: DomainStateFlag }>()
</script>
<template>
  <div class="d-flex align-center ga-2">
    <StatusIcon icon-false="$failCircle" icon-true="$successCircle" :status="stateFlag.active" />
    <p :class="stateFlag.active ? 'text-success' : 'text-failure'">
      {{ stateFlag.description }}
    </p>
  </div>
</template>
