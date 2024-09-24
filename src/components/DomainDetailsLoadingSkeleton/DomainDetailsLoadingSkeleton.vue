<script setup lang="ts"></script>
<template>
  <div>
    <v-skeleton-loader class="bg-background mb-6" type="paragraph" />
    <v-row>
      <v-col class="d-flex flex-column ga-6" :cols="8">
        <v-skeleton-loader v-for="i in 2" :key="i" class="shadow-md oblong" type="article" />
      </v-col>

      <v-col class="d-flex flex-column ga-6" :cols="4">
        <v-skeleton-loader v-for="i in 3" :key="i" class="shadow-md oblong" type="article" />
      </v-col>
    </v-row>
  </div>
</template>
