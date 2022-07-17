<template>
  <div class="card" @click="handleClick">
    <img :src="country['flags'][1]" class="image">
    <div class="content">
      <h1 class="content-title">
        {{ country.name.common }}
      </h1>
      <p><strong>Area:</strong> {{ country.area }}</p>
      <p><strong>Region:</strong> {{ country.region }}</p>
      <p><strong>Capital:</strong> {{ country.capital[0] }}</p>
    </div>
  </div>

</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const { country } = defineProps(['country'])
const handleClick = () => {
  router.push(`country/${country.cca3}`)
}
</script>

<style scoped>
.card {
  border-radius: 10px;
  box-shadow: 1px 2px 4px 0px #949191;
  width: 20%;
  margin-bottom: 2rem;
  min-height: 20rem;
  padding-bottom: 2rem;
  cursor: pointer;
}

.image {
  width: 100%;
  height: 10rem;
  margin-bottom: 3rem;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

}

.content {
  text-align: start;
  padding-inline: 1rem
}

.content-title {
  font-size: 1.5rem;
  font-weight: 600;
}

strong {
  font-weight: 600;
}
</style>