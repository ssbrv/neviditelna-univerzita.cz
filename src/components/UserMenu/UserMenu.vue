<script setup lang="ts">
import type { User } from '../../types/user'

const props = defineProps<{ user: User; activator: string }>()

function logout() {
  // implementation of logout...
}
</script>

<template>
  <v-menu :activator="activator" :close-on-content-click="false">
    <v-card min-width="300" class="shadow-lg oblong">
      <v-list lines="two">
        <v-list-item
          :title="props.user.firstName + ' ' + props.user.lastName"
          :subtitle="props.user.role"
        >
          <template v-slot:prepend>
            <v-avatar>
              <v-icon icon="$accountCircle" size="x-large" />
            </v-avatar>
          </template>
        </v-list-item>

        <v-divider />
        <v-list-item @click="logout()" title="Logout">
          <template v-slot:prepend>
            <v-avatar>
              <v-icon icon="$logout" size="x-large" />
            </v-avatar>
          </template>
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>
