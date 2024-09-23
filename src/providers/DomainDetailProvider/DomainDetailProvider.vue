<script setup lang="ts">
import { ref, provide } from "vue";
import { useFetchDomainDetail } from "../../api/domain/domain"; // Adjust the import path as necessary
import { useRoute } from "vue-router";
import { DOMAIN_DETAIL_SYMBOL } from "./symbols";

const route = useRoute();
const domainId = ref<string | undefined>(
  route.params.domainId as string | undefined
);

if (!domainId.value) {
  console.error("DomainDetailProvider did not get domainId");
} else {
  const domainDetail = useFetchDomainDetail(domainId.value);
  provide(DOMAIN_DETAIL_SYMBOL, domainDetail);

  console.log("[DomainDetailProvider] provided", domainId.value, domainDetail);
}
</script>

<template>
  <router-view />
</template>
