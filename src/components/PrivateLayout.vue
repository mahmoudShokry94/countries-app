<template>
  <div class="private-layout" v-if="store.user?.userName">
    <nav>
      <ul>
        <li>Where in the world?</li>
        <li></li>
        <li></li>
        <li></li>
        <li>Hello {{ store.user.userName }}</li>
      </ul>
    </nav>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from "@/router";
import { useUserStore } from "@/stores/user";
import { onBeforeMount } from "@vue/runtime-core";

const store = useUserStore()

onBeforeMount(()=>{
    if(!store.user?.userName){
        router.push('/login')
    }
})

</script>

<style>
.private-layout {
  min-height: 100vh;
}
nav {
  height: 8vh;
  box-shadow: 1px 2px 4px 0px #949191;
  margin-bottom: 10vh;
}
nav ul {
  height: 100%;
  display: flex;
  align-items: center;
}
nav ul li {
  list-style: none;
  margin: auto;
  display: flex;
  align-items: center;
  height: 100%;
}
.content{
  padding: 0rem 5rem;
}
</style>