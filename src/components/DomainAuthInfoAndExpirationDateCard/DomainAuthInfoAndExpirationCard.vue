<script setup lang="ts">
import { ref } from 'vue'
import CardWithHeader from '../CardWithHeader'
import { formatDateTimeToEnUs } from '../../utils/formatters'
const props = defineProps<{ secret: string; expiresAt: string }>()
const show = ref(false)
const secret = ref(props.secret)
</script>
<template>
  <CardWithHeader>
    <v-row class="align-center ga-1" no-gutters>
      <v-col :cols="3">
        <strong>Auth info:</strong>
      </v-col>
      <v-col class="d-flex align-center ga-2">
        <v-icon
          :icon="show ? '$show' : '$hide'"
          @click="show = !show"
          class="click-animation text-action"
        />
        <i>
          {{ show ? secret : '•'.repeat(secret.length) }}
        </i>
      </v-col>
      <v-responsive width="100%" />
      <v-col :cols="3">
        <strong>Expires at:</strong>
      </v-col>
      <v-col>
        <time>{{ formatDateTimeToEnUs(expiresAt) }}</time>
      </v-col>
    </v-row>
  </CardWithHeader>
</template>
