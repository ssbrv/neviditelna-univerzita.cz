<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

const navigationButton = defineProps<{
  icon: string
  text: string
  pathSegment: string
  pathLevel: number
}>()

const route = useRoute()
const router = useRouter()

function editPath(pathSegment: string) {
  const cleanPath = route.path.split('?')[0].split('#')[0]
  const pathSegments = cleanPath.split('/').filter(Boolean)

  if (pathSegments.length >= navigationButton.pathLevel) {
    pathSegments.splice(navigationButton.pathLevel - 1, pathSegments.length, pathSegment)
  } else {
    pathSegments.push(pathSegment)
  }

  const newPath = '/' + pathSegments.join('/')
  router.push(newPath)
}

function isActive() {
  const cleanCurrentPath = route.path.split('?')[0].split('#')[0]
  const currentSegments = cleanCurrentPath.split('/').filter(Boolean)
  const cleanLinkPath = navigationButton.pathSegment.split('?')[0].split('#')[0]
  const linkSegments = cleanLinkPath.split('/').filter(Boolean)

  return currentSegments[navigationButton.pathLevel - 1] === linkSegments[0]
}
</script>

<template>
  <v-list-item
    @click="editPath(navigationButton.pathSegment)"
    :class="{ 'bg-focused': isActive() }"
  >
    <template v-slot:prepend>
      <v-icon :icon="navigationButton.icon" size="large" />
    </template>

    <v-list-item-title class="text-body-2 font-weight-bold">
      {{ navigationButton.text }}
    </v-list-item-title>
  </v-list-item>
</template>
