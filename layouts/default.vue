<template>
  <!-- <header class="shadow-sm bg-gray-200">
    <nav class="container mx-auto p-4 flex justify-between">
      <NuxtLink to="/" class="font-bold">Site Logo</NuxtLink>
      <ul class="flex gap-4">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="about">About</NuxtLink></li>
        <li><NuxtLink to="/" class="btn">Projects</NuxtLink></li>
      </ul>
    </nav>
  </header> -->
  <!-- Page Content -->
  <!-- Using the Slot component from nuxt3 -->
  <slot />
  <!-- Footer Content -->
  <footer>
    <FooterComponent />
  </footer>
</template>

<script setup></script>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>
