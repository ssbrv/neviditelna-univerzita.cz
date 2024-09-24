<script setup lang="ts">
import { inject, onMounted, ref, watch } from "vue";
import { DomainDetails } from "../../../types/domain";
import { FetchResponse } from "../../../api";
import { DOMAIN_DETAILS_SYMBOL } from "../../../providers/DomainDetailsProvider";
import DomainEventsCard from "../../../components/DomainEventsCard";
import DomainAuthInfoAndExpirationCard from "../../../components/DomainAuthInfoAndExpirationDateCard";
import DomainContactCard from "../../../components/DomainContactCard";
import DomainContactsCard from "../../../components/DomainContactsCard";
import DomainNSSetCard from "../../../components/DomainNSSetCard";
import DomainKeySetCard from "../../../components/DomainKeySetCard";
import DomainStateFlagsCard from "../../../components/DomainStateFlagsCard";
import DomainStateFlagsCardVerbose from "../../../components/DomainStateFlagsCardVerbose";
import { useRoute, useRouter } from "vue-router";
import DomainDetailsLoadingSkeleton from "../../../components/DomainDetailsLoadingSkeleton";
import ErrorCard from "../../../components/ErrorCard";

const {
  data: domainDetails,
  error,
  isLoading,
} = inject(DOMAIN_DETAILS_SYMBOL) as FetchResponse<DomainDetails>;

const route = useRoute();
const router = useRouter();

function updateUrlParameter() {
  const query = { ...route.query, verbose: verbose.value.toString() };
  router.push({ query });
}

const verbose = ref(false);

onMounted(() => {
  verbose.value = route.query.verbose === "true";
});

watch(
  () => route.query.verbose,
  (newVerboseParameter) => {
    verbose.value = newVerboseParameter === "true";
  }
);
</script>
<template>
  <div>
    <v-container v-if="error" class="px-16">
      <ErrorCard :message="error.message" />
    </v-container>

    <DomainDetailsLoadingSkeleton v-else-if="isLoading || !domainDetails" />

    <template v-else>
      <div class="d-flex flex-wrap align-center ga-6 mb-6">
        <h2 class="text-center">{{ domainDetails.fqdn }}</h2>
        <v-switch
          class="d-flex justify-center mt-1"
          color="action"
          v-model="verbose"
          label="Verbose view"
          @change="updateUrlParameter"
        />
      </div>
      <v-row>
        <v-col class="d-flex flex-column ga-6" :lg="8" :md="12" :sm="12">
          <DomainAuthInfoAndExpirationCard
            :expires-at="domainDetails.expires_at"
            secret="some_secret_value"
          />
          <DomainEventsCard :events="domainDetails.events" />
          <DomainStateFlagsCardVerbose
            v-if="verbose"
            :flags="domainDetails.state_flags"
          />
          <DomainStateFlagsCard
            v-else
            :flags="domainDetails.state_flags.flags"
          />
        </v-col>
        <v-col class="d-flex flex-column ga-6" :lg="4" :md="12" :sm="12">
          <DomainContactCard title="Owner" :contact="domainDetails.owner" />
          <DomainContactCard
            v-if="verbose"
            v-for="(contact, index) in domainDetails.administrative_contacts"
            :key="index"
            title="Administrative contact"
            :contact="contact"
          />
          <DomainContactsCard
            v-else
            :contacts="domainDetails.administrative_contacts"
          />
          <DomainNSSetCard :ns-set="domainDetails.nsset" />
          <DomainKeySetCard :key-set="domainDetails.keyset" />
        </v-col>
      </v-row>
    </template>
  </div>
</template>
