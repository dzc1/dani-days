<template>
  <!-- <header class="shadow-sm bg-gray-200">
    <nav class="container mx-auto p-4 flex justify-between">
      <NuxtLink to="/" class="font-bold">Site Logo</NuxtLink>
      <ul class="flex gap-4">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="about">About</NuxtLink></li>
        <li><NuxtLink to="/articles" class="btn">Articles</NuxtLink></li>
      </ul>
    </nav>
  </header> -->

  <!-- COMMENT -->
  <!-- COMMENT -->
  <!-- COMMENT -->

  <!-- Page Content -->
  <!-- Using the Slot component from nuxt3 -->
  <div class="">
    <slot />
  </div>
</template>

<script setup></script>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>
