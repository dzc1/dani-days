<template>
  <!-- TEST ON PROJECTS FROM STRAPI -->
  <section class="flex flex-wrap md:mb-0 md:w-full">
    <!-- @mouseover="cardHoverSection"
        @mouseout="cardHoverSection" -->
    <div
      class="w-full xl:w-1/2 mb-4 md:mb-0"
      v-for="(project, index) in projects.data"
      :key="index"
    >
      <button @click="cardHoverSection" class="bg-blue-500 p-4 m-4">
        click
      </button>
      <span>{{ cardHover }} - {{ project.id }}</span>
      <button class="bg-blue-500 p-4 m-4" @click="hello">CLICK ME</button>
      <div class="relative">
        <!-- Opacity Container -->
        <div
          id="card-opacity-container"
          class="z-10 h-full w-full absolute opacity-70 bg-black"
        ></div>
        <img
          class="absolute z-30 top-0 left-0 pl-8 pt-8 w-1/4"
          :class="cardHover === false ? '' : 'hidden'"
          :src="project.attributes.project_logo_url"
          alt=""
        />
        <!-- Img Container -->
        <img
          class="rounded-7xl"
          :src="project.attributes.project_image_cover_url"
          alt=""
        />

        <!-- Project Mockup's -->
        <div class="absolute z-20 top-1/4 left-2" v-if="cardHover">
          <div class="relative w-10/12">
            <!-- <img
                :src="project.attributes.project_desktop_cover_sample_url"
                alt=""
              />
              <img
                :src="project.attributes.project_mobile_cover_sample_url"
                class="w-1/4 absolute -bottom-8 right-0"
                alt=""
              /> -->
            <h1>hello</h1>
          </div>
        </div>
        <!-- Project Logo -->
        <img
          id="project-logo"
          v-else
          class="absolute z-30 top-1/2 left-1/4 w-1/2"
          :class="cardHover ? 'hidden' : ''"
          :src="project.attributes.project_logo_url"
          alt=""
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

// definePageMeta({
//   layout: "articles",
// });

// Get all Articles
// const response = await $fetch("http://localhost:1337/api/projects");
// console.log(response);

// Test to get projects from strapi using nuxt useFetch() from NUXT3
console.log("Projects from Strapi:");

const { data: projects } = await useFetch(
  "http://localhost:1337/api/projects?populate=*"
);
// console.log(projects);

// FAKE PROJECT Variables
let projectImg = ref("https://wallpapercave.com/wp/zeih1WE.jpg");

// Fetch Products
//const { data: products } = await useFetch("https://fakestoreapi.com/products");
console.log("Products from Fake-API:");
//console.log(products);

//Opacity Logic
const cardHover = ref(false);
const cardHoverSection = () => {
  cardHover.value = !cardHover.value;
  const container = document.querySelector("#card-opacity-container");
};
</script>
