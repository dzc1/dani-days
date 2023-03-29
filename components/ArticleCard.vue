<template>
  <div class="card text-center">
    <img :src="article.image" alt="article Thumb" class="thumb" />
    <p class="font-bold text-gray-500 m-4 truncate">{{ article.title }}</p>
    <NuxtLink :to="`/articles/${article.id}`">
      <p class="btn my-4">View Details</p>
    </NuxtLink>
  </div>
</template>

<script setup>
const { article } = defineProps(["article"]);
</script>

<style scoped>
.thumb {
  max-height: 120px;
  max-width: 70%;
  margin: 0 auto;
}
</style>
