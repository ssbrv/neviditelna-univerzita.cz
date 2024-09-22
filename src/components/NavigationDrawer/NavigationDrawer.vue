<script setup lang="ts">
const props = defineProps<{
  drawer: boolean;
  slotNames: Array<string>;
}>();
</script>

<template>
  <v-navigation-drawer v-model="props.drawer">
    <v-list>
      <v-list-item>
        <v-list-item-title class="tw-text-xs tw-font-bold tw-text-passive">
          APPLICATIONS
        </v-list-item-title>
      </v-list-item>

      <slot
        v-for="slotName in props.slotNames"
        :key="slotName"
        :name="slotName"
      ></slot>
    </v-list>
  </v-navigation-drawer>
</template>
