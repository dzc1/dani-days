<template>
  <div>
    <h2 class="text-center mb-8">Products</h2>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="a in products">
        <ArticleCard :article="a" />
      </div>
      <div>
        {{ response.data }}
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "articles",
});

// Get all Articles
const response = await $fetch("http://localhost:1337/api/projects");

console.table(response.data[0].attributes);

// Fetch Products
const { data: products } = await useFetch("https://fakestoreapi.com/products");

// Metatag inside individual file
// First Way of Using metaTags inside file - Script Tag
useHead({
  title: "Ddays - Articles",
  meta: [{ name: "description", content: "Nuxt 3 Merch" }],
});
</script>
