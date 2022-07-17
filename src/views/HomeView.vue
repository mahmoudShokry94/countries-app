
<template>
  <PrivateLayout>
    <main>
      <div>
        <input 
        class="country-search" 
        placeholder="search for a country" 
        v-model="countrySearch" />
      </div>
      <div class="countries-view">
        <CountryCard class="card" v-for="country in filteredCountries" :country="country" />
      </div>
    </main>
  </PrivateLayout>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import PrivateLayout from "../components/PrivateLayout.vue";
import CountryCard from "../components/CountryCard.vue";

const countries = ref([]);
const countrySearch = ref("");

fetch("https://restcountries.com/v3/all?fields=name,cca3,flags,area,region,capital")
  .then((res) => res.json())
  .then((data) => {
    countries.value = data
  }).catch((error)=>console.log(error))

  const filteredCountries = computed(()=>{
    return countries.value.filter((country:any)=> country.name.common.toLocaleLowerCase().includes(countrySearch.value.toLocaleLowerCase()))
  })
  console.log("filteredCountries",filteredCountries)
</script>

<style>
.country-search {
  border-radius: 10px;
  padding: 12px;
  width: 50%;
  margin-bottom: 0.7rem;
}

.countries-view {
  display: flex;
  flex-wrap: wrap;
  gap: 5%;
  margin-top: 2rem;
}
</style>