<template>
  <TheNavbar />
  <router-view />
  <TheFooter />
</template>

<script setup>
import TheNavbar from '@/components/layout/TheNavbar.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
</script>
