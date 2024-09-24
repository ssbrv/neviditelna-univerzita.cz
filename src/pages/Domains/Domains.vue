<script setup lang="ts">
import { useRouter } from "vue-router";
import { useFetchDomains } from "../../api/domain";
import ErrorCard from "../../components/ErrorCard";

const { data: domains, error, isLoading } = useFetchDomains();

const router = useRouter();

function navigateToDomainDetails(domainId: string) {
  router.push(`${router.currentRoute.value.path}/${domainId}/details`);
}
</script>

<template>
  <div class="d-flex flex-column ga-6">
    <h2>Domains</h2>

    <ul class="d-flex flex-column ga-4" v-if="isLoading">
      <li v-for="i in 3" :key="i">
        <v-skeleton-loader class="oblong" type="paragraph" />
      </li>
    </ul>

    <v-container v-else-if="error" class="px-16">
      <ErrorCard :message="error.message" />
    </v-container>

    <ul v-else-if="domains?.length" class="d-flex flex-column ga-4">
      <v-card
        v-for="domain in domains"
        :key="domain.id"
        :title="domain.fqdn"
        @click="navigateToDomainDetails(domain.id)"
        class="shadow-md oblong"
      />
    </ul>

    <i v-else>No domains</i>
  </div>
</template>
