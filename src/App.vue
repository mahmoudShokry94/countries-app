<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useUserStore } from './stores/user'

const store = useUserStore()
</script>

<template>
  <RouterView />
</template>

<style >

</style>
