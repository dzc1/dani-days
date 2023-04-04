<template>
  <!-- TEST ON PROJECTS FROM STRAPI -->
  <section class="flex flex-wrap md:mb-0 md:w-full">
    <div
      class="w-full xl:w-1/2 mb-4 md:mb-0"
      v-for="(project, index) in projects.data"
      :key="index"
      @mouseenter="cardHover[index] = !cardHover[index]"
      @mouseleave="cardHover[index] = !cardHover[index]"
    >
      <!-- <button
        @mouseenter="cardHover[index] = !cardHover[index]"
        @mouseout="cardHover[index] = !cardHover[index]"
        class="bg-blue-500 p-4 m-4"
      >
        Hover Me - Daniela
      </button>
      <span>{{ cardHover[index] }} </span> -->
      <div class="relative">
        <!-- Opacity Container -->
        <div
          class="z-10 h-full w-full absolute opacity-60 bg-black"
          v-show="cardHover[index]"
        ></div>
        <img
          class="absolute z-30 top-0 left-0 pl-8 pt-8 w-1/4"
          :class="cardHover[index] ? '' : 'hidden'"
          :src="project.attributes.project_logo_url"
          alt=""
          v-show="cardHover[index]"
        />
        <!-- Img Container -->
        <div
          v-show="!cardHover[index]"
          class="bg-black absolute z-30 top-0 h-full w-full opacity-70"
        ></div>
        <img :src="project.attributes.project_image_cover_url" alt="" />
        <!-- Project Mockup's -->
        <div class="absolute z-20 top-1/4" v-if="cardHover[index]">
          <div class="relative w-10/12">
            <img
              src="https://res.cloudinary.com/dnsnkrcru/image/upload/v1680542952/dani-web/Homepage/section-projects/Mutter%20Ventures/mutter-desktop-mockup_kv5yak.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dnsnkrcru/image/upload/v1680542952/dani-web/Homepage/section-projects/Mutter%20Ventures/mutter-mobile-mockup_x9zezr.png"
              alt=""
            />
          </div>
        </div>
        <!-- Project Logo -->
        <img
          id="project-logo"
          v-else
          class="absolute z-30 top-[40%] left-[20%]"
          :class="cardHover[index] ? 'hidden' : ''"
          :src="project.attributes.project_logo_url"
          alt=""
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

// Test to get projects from strapi using nuxt useFetch() from NUXT3
console.log("Projects from Strapi:");

const { data: projects } = await useFetch(
  "http://localhost:1337/api/projects?populate=*"
);

const cardHover = ref(Array(projects.data));
</script>

<style scoped></style>
