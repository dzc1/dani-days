<template>
  <header
    :class="{ hidden: showNavbar }"
    class="shadow-sm bg-[#121212] sticky top-0 z-50 transition-all duration-500 ease-in-out"
  >
    <nav class="container mx-auto p-4 flex justify-between items-center">
      <NuxtLink to="/" class="font-bold">
        <img class="w-1/4" :src="logoUrl" alt="" />
      </NuxtLink>
      <ul class="flex gap-4 text-white font-extralight">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/" class="btn">Contact</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
//Show hide navbar logic
const showNavbar = ref(false);

const toggleNavbar = () => {
  showNavbar.value = window.scrollY > 750 || window.pageYOffset > 750;
};

onMounted(() => {
  window.addEventListener("scroll", toggleNavbar);
  window.addEventListener("resize", toggleNavbar);
});

onUnmounted(() => {
  window.removeEventListener("scroll", toggleNavbar);
  window.removeEventListener("resize", toggleNavbar);
});

const logoUrl = ref(
  "https://res.cloudinary.com/dnsnkrcru/image/upload/v1681394149/dani-web/Homepage/section-header/logo-white_r5ydix.svg"
);
</script>

<style scoped></style>
