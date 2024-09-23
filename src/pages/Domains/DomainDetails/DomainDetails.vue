<script setup lang="ts">
import { inject } from "vue";
import { DomainDetail } from "../../../types/domain";
import { FetchResponse } from "../../../api";
import { DOMAIN_DETAIL_SYMBOL } from "../../../providers/DomainDetailProvider";

const domainDetail = inject(
  DOMAIN_DETAIL_SYMBOL
) as FetchResponse<DomainDetail>;
</script>
<template>
  <div>Domain Details</div>
</template>
