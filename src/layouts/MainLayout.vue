<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>

    <app-footer />
  </q-layout>
</template>

<script setup lang="ts">
  import AppFooter from '../components/AppFooter.vue'
</script>
