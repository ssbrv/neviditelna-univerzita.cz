<script setup lang="ts">
import { useRouter } from "vue-router";

const { title = "Error", message = "Something went wrong..." } = defineProps<{
  title?: string;
  message?: string;
}>();

const router = useRouter();

const navigateBack = () => {
  if (window.history.length > 1) {
    router.back();
  } else {
    router.push("/domains");
  }
};
</script>
<template>
  <div class="shadow-md oblong">
    <div class="bg-failure pa-4 d-flex align-center ga-2 oblong-t">
      <v-icon size="30" icon="$errorCircle" />
      <h2>{{ title }}</h2>
    </div>
    <div class="pa-4 d-flex flex-column ga-2">
      <p class="text-h6">{{ message }}</p>
      <div class="d-flex justify-end">
        <v-btn class="bg-failure shadow-sm oblong" @click="navigateBack"
          >Go back</v-btn
        >
      </div>
    </div>
  </div>
</template>
