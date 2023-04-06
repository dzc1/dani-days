<template>
  <!-- Header -->
  <header class="shadow-sm bg-white">
    <nav class="container mx-auto p-4 flex justify-between">
      <NuxtLink to="/">Site Logo</NuxtLink>
    </nav>
  </header>
  <!-- Page Content -->
  <!-- Using the Slot component from nuxt3 -->
  <slot />
  <!-- Footer -->
  <footer class="p-4 flex justify-between border-t-2">
    <ul class="flex gap-4">
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="about">About</NuxtLink></li>
      <li><NuxtLink to="/articles" class="btn">Articles</NuxtLink></li>
    </ul>
  </footer>
</template>

<script setup></script>
