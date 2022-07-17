<template>
  <div class="public-layout">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">

</script>

<style>
.public-layout{
    background-image: linear-gradient(to right, #80D6DC, #41C2CB);    width: 100%;
    min-height: 100vh;
    padding-block:  10rem;
}
</style>