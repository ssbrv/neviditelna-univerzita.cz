<script setup lang="ts">
import { provide } from "vue";
import { User } from "../types";

// here would be an api call to get details of the account after logging in
const user: User = { firstName: "Jan", lastName: "Muselík", role: "admin" };
provide("user", user);
</script>
<template>
  <router-view />
</template>
