<template>
  <!-- TEST ON PROJECTS FROM STRAPI -->
  <section class="flex flex-wrap md:mb-0 md:w-full">
    <div
      class="w-full xl:w-1/2"
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
        <div class="absolute z-30 top-0 left-0 pl-8 pt-8 w-1/4">
          <!-- <p
            v-show="cardHover[index]"
            @click="cardHover[index] = !cardHover[index]"
          >
            close
          </p> -->
          <img
            :class="cardHover[index] ? '' : 'hidden'"
            :src="project.attributes.project_logo_url"
            alt=""
            v-show="cardHover[index]"
          />
        </div>

        <!-- Close CTA -->
        <!-- <div
          class="md:hidden flex justify-center"
          @click="cardHover[index] = !cardHover[index]"
        >
          <button
            v-show="cardHover[index]"
            class="absolute z-30 top-10 right-0 bg-white text-black"
          >
            close
          </button>
        </div> -->
        <!-- Img Container -->
        <div
          v-show="!cardHover[index]"
          class="bg-black absolute z-30 top-0 h-full w-full opacity-70"
        ></div>
        <img :src="project.attributes.project_image_cover_url" alt="" />
        <!-- Project Mockup's -->
        <div class="absolute z-20 top-1/4" v-if="cardHover[index]">
          <div class="flex items-center justify-center">
            <div class="relative w-10/12">
              <img
                :src="project.attributes.project_desktop_cover_sample_url"
                v-if="project.attributes.project_desktop_cover_sample_url"
                alt=""
                class="z-20"
                id="desktop-img"
              />
              <img
                v-if="project.attributes.project_mobile_cover_sample_url"
                :src="project.attributes.project_mobile_cover_sample_url"
                alt=""
                id="mobile-img"
                class="w-1/4 z-30 absolute -right-4 -bottom-8 pt-8"
              />
            </div>
          </div>
        </div>
        <!-- Project Logo -->
        <img
          id="project-logo"
          v-else
          class="absolute z-30 top-[35%] left-[0%] md:top-[35%] md:left-[5%] md:w-10/12"
          :class="cardHover[index] ? 'hidden' : ''"
          :src="project.attributes.project_logo_url"
          alt=""
        />
        <div
          class="md:hidden flex justify-center"
          @click="cardHover[index] = !cardHover[index]"
        >
          <button
            v-show="!cardHover[index]"
            class="absolute z-30 top-[70%] bg-white text-black p-2 rounded w-1/3"
            :disabled="cardHover[index]"
          >
            View
          </button>
        </div>
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
