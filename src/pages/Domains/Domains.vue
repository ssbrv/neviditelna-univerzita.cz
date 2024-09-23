<script setup lang="ts">
import { useRouter } from "vue-router";
import { useFetchDomains } from "../../api/domain";

const domainList = useFetchDomains();

const router = useRouter();

function navigateToDomainDetails(domainId: string) {
  router.push(`${router.currentRoute.value.path}/${domainId}/details`);
}
</script>

<template>
  <div class="d-flex flex-column ga-6">
    <h2>Domains</h2>

    <ul class="d-flex flex-column ga-4" v-if="domainList.isLoading.value">
      <li v-for="i in 3" :key="i">
        <v-skeleton-loader class="oblong" type="paragraph" />
      </li>
    </ul>

    <template v-else-if="domainList.error?.value">
      <v-card :title="domainList.error.value?.message" />
    </template>

    <ul v-else class="d-flex flex-column ga-4">
      <v-card
        v-for="domain in domainList.data?.value"
        :key="domain.id"
        :title="domain.fqdn"
        @click="navigateToDomainDetails(domain.id)"
        class="shadow-sm oblong"
      />
    </ul>
  </div>
</template>
