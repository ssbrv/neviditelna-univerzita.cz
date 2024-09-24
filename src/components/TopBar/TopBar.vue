<script setup lang="ts">
import { inject } from 'vue'
import { User } from '../../types/user'
import UserMenu from '../UserMenu'
import { USER_SYMBOL } from '../../providers/AuthenticationProvider'

const user: User = inject(USER_SYMBOL) as User

const props = defineProps<{
  onToggleDrawer: () => void
}>()

const menuActivatorId = 'menu-activator'
</script>

<template>
  <v-app-bar class="bg-action pl-1 pr-2 shadow-lg">
    <v-app-bar-nav-icon class="circle" @click.stop="props.onToggleDrawer" />

    <v-toolbar-title>Ferda</v-toolbar-title>

    <v-spacer />

    <v-btn class="oblong" :id="menuActivatorId">
      <template v-slot:prepend>
        <v-icon icon="$accountCircle" size="x-large" />
      </template>
      {{ user.firstName + ' ' + user.lastName }}
    </v-btn>
    <UserMenu :user="user" :activator="'#' + menuActivatorId" />
  </v-app-bar>
</template>
