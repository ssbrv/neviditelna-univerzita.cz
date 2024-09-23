<script setup lang="ts">
import { provide } from "vue";
import { USER_SYMBOL } from "./symbols";
import { User } from "../../types/user";

// this is just a mock
// the real implemention would call an auth api, store authentication token in local storage and set authentication header for axios, and etc.
const user: User = { firstName: "Jan", lastName: "Muselík", role: "admin" };
provide(USER_SYMBOL, user);
</script>
<template>
  <router-view />
</template>
