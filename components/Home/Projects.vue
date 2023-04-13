<template>
  <!-- TEST ON PROJECTS FROM STRAPI -->
  <section>
    <div
      v-for="(project, index) in projects.data"
      :key="index"
      @mouseenter="cardHover[index] = !cardHover[index]"
      @mouseleave="cardHover[index] = !cardHover[index]"
    >
      <!-- <p>{{ project.attributes.slug }}</p>
      <NuxtLink class="bg-red-500" :to="`/projects/${project.attributes.slug}`"
        >VIEW DETAILS</NuxtLink
      > -->
      <div class="project-container">
        <!-- Opacity Container -->
        <div class="opacity-container" v-show="cardHover[index]"></div>
        <div class="top-right-logo">
          <img
            :class="
              cardHover[index]
                ? 'animate__animated animate__fadeIn'
                : 'hidden animate__animated animate__fadeOut'
            "
            :src="project.attributes.project_logo_url"
            alt=""
            v-show="cardHover[index]"
          />
        </div>

        <!-- Img Container -->
        <div v-show="!cardHover[index]" class="opacity-container-project"></div>
        <!-- Project Background Cover IMG -->
        <img :src="project.attributes.project_image_cover_url" alt="" />
        <!-- Project Mockup's -->
        <div
          class="mockups"
          v-if="cardHover[index]"
          :class="
            cardHover[index]
              ? 'animate__animated animate__fadeIn'
              : 'animate__animated animate__fadeOut'
          "
        >
          <div class="mockups-flex-container">
            <div class="mockups-inner-container">
              <NuxtLink :to="`/projects/${project.attributes.slug}`"
                ><img
                  :src="project.attributes.project_desktop_cover_sample_url"
                  v-if="project.attributes.project_desktop_cover_sample_url"
                  alt=""
                  class="desktop-mockup"
                  id="desktop-img" />
                <img
                  v-if="project.attributes.project_mobile_cover_sample_url"
                  :src="project.attributes.project_mobile_cover_sample_url"
                  alt=""
                  class="mobile-mockup"
                  id="mobile-img"
              /></NuxtLink>
            </div>
          </div>
        </div>
        <!-- Project Logo -->
        <img
          id="project-logo"
          v-else
          :class="
            cardHover[index]
              ? 'hidden animate__animated animate__fadeOut'
              : 'animate__animated animate__fadeIn'
          "
          :src="project.attributes.project_logo_url"
          alt=""
        />
        <!-- Mobile CTA - VIEW PROJECT -->
        <div
          class="mobile-container"
          @click="cardHover[index] = !cardHover[index]"
        >
          <button v-show="!cardHover[index]" :disabled="cardHover[index]">
            View
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import "animate.css";

// Test to get projects from strapi using nuxt useFetch() from NUXT3
console.log("Projects from Strapi:");

const { data: projects } = await useFetch(
  "https://dani-days-backend.herokuapp.com/api/projects?populate=*"
);

// const { data: projects } = await useFetch(
//   "http://localhost:1337/api/projects?populate=*"
// );
console.log(projects);

// Deployed Url
// https://dani-days-backend.herokuapp.com/
// Local URL
// http://localhost:1337/api/projects

const cardHover = ref(Array(projects.data));
</script>

<style scoped>
section {
  @apply flex flex-wrap md:mb-0 md:w-full;
}

section > div {
  @apply w-full xl:w-1/2;
}

.project-container {
  @apply relative;
}

.top-right-logo {
  @apply absolute z-30 top-0 left-0 pl-8 pt-8 w-1/4;
}
.opacity-container {
  @apply z-10 h-full w-full absolute opacity-60 bg-black;
}
.opacity-container-project {
  @apply bg-black absolute z-30 top-0 h-full w-full opacity-70;
}

.mockups {
  @apply absolute z-20 top-1/4;
}
.mockups-flex-container {
  @apply flex items-center justify-center;
}
.mockups-inner-container {
  @apply relative w-10/12;
}

.desktop-mockup {
  @apply z-20;
}
.mobile-mockup {
  @apply w-1/4 z-30 absolute -right-4 -bottom-8 pt-8;
}

#project-logo {
  @apply absolute z-30 top-[35%] left-[0%] md:top-[35%] md:left-[5%] md:w-10/12;
}

.mobile-container {
  @apply md:hidden flex justify-center;
}

.mobile-container > button {
  @apply absolute z-30 top-[70%] bg-white text-black p-2 rounded w-1/3;
}
</style>
