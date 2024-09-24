<script setup lang="ts">
import { ref, provide } from 'vue'
import { useFetchDomainDetails } from '../../api/domain/domain'
import { useRoute } from 'vue-router'
import { DOMAIN_DETAILS_SYMBOL } from './symbols'

const route = useRoute()
const domainId = ref<string | undefined>(route.params.domainId as string | undefined)

if (!domainId.value) {
  console.error('DomainDetailsProvider did not get domainId')
} else {
  const domainDetails = useFetchDomainDetails(domainId.value)
  provide(DOMAIN_DETAILS_SYMBOL, domainDetails)

  console.log('[DomainDetailsProvider] provided', domainId.value, domainDetails)
}
</script>

<template>
  <router-view />
</template>
