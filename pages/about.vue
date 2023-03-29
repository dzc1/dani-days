<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam unde
      in, ullam perspiciatis eius eum at adipisci dicta temporibus eveniet?
    </p>
    <p>api response:</p>
    <div>{{ data }}</div>
  </div>
</template>

<script setup>
// Using a private key throguh useRuntimeCOnfig() native nuxt method - DYnamic Server Routes
const { data } = await useFetch("/api/currency/GBP");
//const { data } = await useFetch("/api/ninja");
// const { data } = await useFetch("/api/ninja?name=diego", {
//   method: "post",
//   body: { age: 31 },
// });
//const { data } = await useFetch("/api/ninja");
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>
