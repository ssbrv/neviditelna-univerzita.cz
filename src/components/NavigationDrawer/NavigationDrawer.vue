<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  drawer: boolean
  slotNames: Array<string>
}>()

const emit = defineEmits(['update:drawer'])
const localDrawer = ref(props.drawer)
watch(
  () => props.drawer,
  (newValue) => {
    localDrawer.value = newValue
  }
)

watch(localDrawer, (newValue) => {
  emit('update:drawer', newValue)
})
</script>

<template>
  <v-navigation-drawer v-model="localDrawer">
    <v-list>
      <v-list-subheader class="text-caption font-weight-bold"> APPLICATIONS </v-list-subheader>

      <slot v-for="slotName in props.slotNames" :key="slotName" :name="slotName"></slot>
    </v-list>
  </v-navigation-drawer>
</template>
