<template>
  <!-- <header class="shadow-sm bg-[#121212] sticky top-0 z-50">
    <nav class="container mx-auto p-4 flex justify-between items-center">
      <NuxtLink to="/" class="font-bold">
        <img class="w-1/4" :src="logoUrl" alt="" />
      </NuxtLink>
      <ul class="flex gap-4 text-white font-extralight">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/" class="btn">Contact</NuxtLink></li>
      </ul>
    </nav>
  </header> -->

  <!-- TEST -->
  <header
    :class="{ hidden: showNavbar }"
    class="shadow-sm bg-[#121212] sticky top-0 z-50 animate__animated2"
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

  <!-- Page Content -->
  <!-- Using the Slot component from nuxt3 -->
  <slot />
  <!-- Footer Content -->
  <footer>
    <FooterComponent />
  </footer>
</template>

<script setup>
import "animate.css";

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

const view = reactive({
  atTopOfPage: true,
});

// handleScroll();

const logoUrl = ref(
  "https://res.cloudinary.com/dnsnkrcru/image/upload/v1681394149/dani-web/Homepage/section-header/logo-white_r5ydix.svg"
);
</script>

<style scoped>
/* .router-link-exact-active {
  color: #12b488;
} */
</style>
