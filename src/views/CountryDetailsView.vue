<template>
  <PrivateLayout>
    <div v-if="country">
      <div>
        <button class="back-btn" @click="router.go(-1)">
          &#x2190; Back
        </button>
      </div>
      <div class="country-details">
        <div class="flag" v-if="country['flags']">
          <img :src="country['flags'][1]" class="image" />
        </div>
        <div class="details">
          <h1 class="content-title">
            {{ country?.name?.common || "---" }}
          </h1>
          <div class="left-details">
            <p><strong>Native Name:</strong> {{ country?.name?.official || "---" }}</p>
            <p><strong>Area:</strong> {{ country?.area || "---" }}</p>
            <p><strong>Region:</strong> {{ country?.region || "---" }}</p>
            <p><strong>Sub Region:</strong> {{ country?.subregion || "---" }}</p>
            <p><strong>Capital:</strong> {{ country.capital?.[0] || "---" }}</p>
          </div>
          <div class="right-details">
            <p><strong>Top Level Domain:</strong> {{ country?.tld?.[0] || "---" }}</p>
            <p><strong>Currencies:</strong> {{ Object.values(country?.currencies)[0]?.name || "---"}}</p>
            <p><strong>Languages:</strong> {{ country?.languages
                ? Object.values(country?.languages).reduce((value: string, accumulator: string) => value + " - " + accumulator) :
                "---"
            }}</p>
          </div>
        </div>
      </div>
    </div>
  </PrivateLayout>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import PrivateLayout from "../components/PrivateLayout.vue";
const router = useRouter()
const route = useRoute()
const country = ref(null || <any>{})

fetch("https://restcountries.com/v3/alpha/" + route.params.countryId)
  .then((res) => res.json())
  .then((data) => {
    if (data.length > 0) {
      country.value = data[0]
      console.log(country.value)
      console.log(Object.values(country?.value?.languages).reduce((value: string, accumulator: string) => value + " " + accumulator))
    }
  }).catch((error) => console.log(error))
</script>

<style scoped>
.back-btn {
  font-weight: 600;
  font-size: 1rem;
  padding: 0.5rem 1.5rem;
  background: #fff;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  box-shadow: 5px 5px 5px #ccc;
}

.country-details {
  margin-block: 5rem;
  min-height: 50vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "flag details";
  column-gap: 1rem;
}

.flag {
  grid-area: flag;
}

.details {
  grid-area: details;
  padding: 2rem;
}

.image {
  width: 80%;
  height: 80%;
}

.content-title {
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

strong {
  font-weight: 600;
}

p {
  font-size: 1.25rem;

}

.right-details,
.left-details {
  display: inline-block;
  width: 50%;
}
</style>
