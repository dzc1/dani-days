<template>
  <section id="desktop" class="h-screen">
    <!-- TEST -->
    <!-- Left Side -->
    <section class="relative" v-if="projectData.boolean">
      <div class="relative bg-[#121212] overflow-hidden">
        <img
          class="hidden md:block absolute bottom-0 right-0 h-full w-1/2 object-cover"
          :src="projectData.backgroundImage"
          alt=""
        />
        <div>
          <div class="md:h-screen pt-40 pb-10">
            <div class="sm:ml-8 lg:ml-12">
              <div class="flex items-end">
                <h1 class="text-white mt-52 sm:mt-52 w-1/3">
                  <span class="block"
                    ><img :src="projectData.logo" alt=""
                  /></span>
                  <span class="block">
                    <VueMarkdown
                      class="text-white ml-12 font-extralight text-2xl"
                      :source="projectData.markDown"
                    />
                  </span>
                </h1>
                <span class="block">
                  <a
                    class="inline-block w-full sm:w-auto px-4 py-2 text-center font-medium bg-white hover:bg-gray-300 text-black rounded transition duration-250 cursor-pointer"
                    @click="showUseCase"
                    >Read Full Case</a
                  >
                </span>
              </div>
            </div>
          </div>
        </div>
        <img
          class="block md:hidden w-full"
          :src="projectData.backgroundImage"
          alt=""
        />
      </div>
    </section>
    <!-- Right Side -->
    <section class="relative" v-else>
      <div class="relative bg-[#121212] overflow-hidden">
        <!-- <img
        class="hidden md:block absolute bottom-0 right-0 h-full w-1/2 object-cover"
        :src="projectData.backgroundImage"
        alt=""
      /> -->
        <div class="hidden md:block absolute bottom-0 right-0 h-full w-1/2">
          <div class="w-full bg-white h-screen overflow-y-auto">
            <VueMarkdown
              class="text-[#121212] ml-12 font-extralight text-4xl mt-24"
              :source="projectData.body"
            />
            <div class="p-16">
              <img :src="projectData.mockupsDesktop" alt="" />
              <img :src="projectData.mockupsMobile" alt="" />
            </div>
          </div>
        </div>
        <div>
          <div class="md:h-screen pt-40 pb-10">
            <div class="sm:ml-8 lg:ml-12">
              <div class="flex items-end">
                <h1 class="text-white mt-52 sm:mt-52 w-1/3">
                  <span class="block"
                    ><img :src="projectData.logo" alt=""
                  /></span>
                  <span class="block">
                    <VueMarkdown
                      class="text-white ml-12 font-extralight text-2xl"
                      :source="projectData.markDown"
                  /></span>
                </h1>
                <span class="block">
                  <a
                    class="inline-block w-full sm:w-auto px-4 py-2 text-center font-medium bg-white hover:bg-gray-300 text-black rounded transition duration-250 cursor-pointer"
                    @click="showUseCase"
                    >Close</a
                  >
                </span>
              </div>
            </div>
          </div>
        </div>
        <img
          class="block md:hidden w-full"
          :src="projectData.backgroundImage"
          alt=""
        />
      </div>
    </section>
  </section>

  <section id="mobile" class="overflow-hidden">
    <div id="project-intro" class="overflow-hidden" v-if="projectData.boolean">
      <div class="flex items-end" :style="bgImageStyle"></div>
      <div class="p-10 w-full bg-black h-[400px] flex flex-col justify-end">
        <div class="relative">
          <img
            class="absolute bottom-0 -left-10"
            :src="projectData.logo"
            alt=""
          />
        </div>
        <p class="text-white font-extralight">
          <VueMarkdown class="" :source="projectData.markDown" />
        </p>
        <a
          class="inline-block w-full sm:w-auto py-2 text-left font-medium text-white rounded transition duration-250 cursor-pointer"
          @click="showUseCase"
          >Read Full Case</a
        >
      </div>
    </div>
    <div id="project-body" class="overflow-hidden h-full" v-else>
      <div
        @click="showUseCase"
        class="fixed w-full bg-black text-white text-center py-4"
      >
        Close
      </div>
      <VueMarkdown class="prose" :source="projectData.body" />
      <div class="p-4">
        <img :src="projectData.mockupsDesktop" class="mb-12" alt="" />
        <img :src="projectData.mockupsMobile" alt="" />
      </div>
    </div>
  </section>
</template>

<script setup>
import VueMarkdown from "vue-markdown-render";

// Change views of containers
const showUseCase = () => {
  projectData.boolean = !projectData.boolean;
};
//
//
//
// PROJECT DATA INFO
// Grabbing the slug using the route param through the method composable useRoute( on nuxt 3 with some concatenation pointing to the params object
const { slug } = useRoute().params;
const uri = `https://dani-days-backend.herokuapp.com/api/projects?filters[slug]=${slug}`;
// const uriDeployed = `https://dani-days-backend.herokuapp.com/api/projects?filters[slug]=${slug}`;
// const uriLocal = `http://localhost:1337/api/projects?filters[slug]=${slug}`;

// Fetch the product
const { data: project } = await useFetch(uri, { key: slug });

// Empty Variable with projectData reactive object
const projectData = reactive({
  markDown: "",
  logo: "",
  backgroundImage: "",
  body: "",
  boolean: true,
  mockupsDesktop: "",
  mockupsMobile: "",
});

// Function to save each info into one variable to use in template
const projectInfo = async () => {
  const response = await fetch(uri);
  const data = await response.json();
  let dataNotation = data.data[0].attributes.intro;
  let background = data.data[0].attributes.project_image_cover_url;
  let projectLogo = data.data[0].attributes.project_logo_url;
  let projectBody = data.data[0].attributes.body;
  let mDesktop = data.data[0].attributes.mockups_desktop;
  let mMobile = data.data[0].attributes.mockups_mobile;

  projectData.markDown = dataNotation;
  projectData.backgroundImage = background;
  projectData.logo = projectLogo;
  projectData.body = projectBody;
  projectData.mockupsDesktop = mDesktop;
  projectData.mockupsMobile = mMobile;
};
projectInfo();

if (!project.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Project Not Found",
    // fatal sets to true forces the app to show the page caught by the user inputed through the browser using the window object, basically if the user types something in the url that does not exist manually
    fatal: true,
  });
}

// using definePageMeta method from NUXT3 in order to define meta information such as the type of 'layout' file created.
definePageMeta({
  layout: "default",
});

const bgImageStyle = computed(() => ({
  backgroundImage: `url(${projectData.backgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "400px",
}));
</script>

<style scoped>
#desktop {
  @apply hidden md:block;
}
#mobile {
  @apply block md:hidden;
}

h2 {
  @apply font-bold;
}
</style>
