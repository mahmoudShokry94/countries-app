<template>
  <PublicLayout>
    <div class="login-card">
      <form @submit.prevent="handleSignIn">
        <label>Enter user name</label>
        <input v-model="userName" />
        <button  type="submit">Sign in</button>
      </form>
    </div>
  </PublicLayout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import router from "@/router";
import { useUserStore } from "../stores/user";
import PublicLayout from "../components/PublicLayout.vue";

const userName = ref("");
const store = useUserStore();

const handleSignIn = () => {
  store.setuser({ userName: userName.value });
  router.push("/");
};
</script>

<style scoped>
.login-card {
  padding: 5rem;
  border-radius: 10px;
  background: white;
  text-align: center;
  width: 50%;
  margin-inline: auto;
}
label {
  display: block;
  text-align: start;
  margin-bottom: 0.7rem;
  background: white;
}
input {
  border-radius: 10px;
  border: none;
  background: #ededee;
  padding: 12px;
  width: 100%;
  margin-bottom: 0.7rem;
}
button {
  border-radius: 20px;
  border: 1px solid #80d6dc;
  background-color: #41c2cb;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  text-transform: uppercase;
  cursor: pointer;
}
</style>