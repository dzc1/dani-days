<template>
  <!-- Background Image Container -->
  <p>{{ projectData.boolean }}</p>
  <button @click="showUseCase" class="bg-red-500 px-4 rounded">click me</button>
  <section v-if="projectData.boolean">
    <div class="h-screen bg-[#121212] text-2xl">
      <div class="flex flex-wrap md:mb-0 h-screen">
        <div
          class="w-full md:w-1/2 mb-4 md:mb-0 flex flex-col justify-end md:px-24 md:pb-28"
        >
          <img :src="projectData.logo" alt="" class="w-1/2" />
          <VueMarkdown
            class="text-white ml-12 font-extralight text-4xl mb-6"
            :source="projectData.markDown"
          />
        </div>
        <div class="w-full md:w-1/2 mb-4 md:mb-0">
          <img :src="projectData.backgroundImage" alt="" />
        </div>
      </div>
    </div>
  </section>
  <!-- Full Case Container -->
  <section class="flex flex-col h-screen" v-else>
    <!--  end::navbar   -->
    <div class="flex flex-1 overflow-hidden">
      <!--   start::Sidebar    -->
      <aside
        class="bg-[#121212] w-1/2 overflow-y-auto flex flex-col justify-end md:px-24 md:pb-28"
      >
        <img :src="projectData.logo" alt="" class="w-1/2" />
        <VueMarkdown
          class="text-white ml-12 font-extralight text-4xl mb-6"
          :source="projectData.markDown"
        />
      </aside>
      <!--   end::Sidebar    -->
      <!--   start::Main Content     -->
      <main class="flex flex-1 bg-white overflow-y-auto p-8">
        <VueMarkdown
          class="text-[#121212] ml-12 font-extralight text-4xl mt-24"
          :source="projectData.body"
        />
      </main>
      <!--   end::Main Content     -->
    </div>
  </section>

  <!-- TEST -->
  <section class="relative">
    <div class="relative bg-[#121212] overflow-hidden">
      <div class="hidden sm:block absolute top-0 left-0"></div>
      <img
        class="hidden md:block absolute bottom-0 right-0 h-full w-1/2 object-cover"
        :src="projectData.backgroundImage"
        alt=""
      />
      <div>
        <div class="pt-32 pb-24">
          <div class="sm:ml-8 lg:ml-12">
            <div class="flex items-end">
              <h1 class="text-white mt-32 sm:mt-52">
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
                  class="inline-block w-full sm:w-auto px-4 py-2 text-center font-medium bg-white hover:bg-gray-300 text-black rounded transition duration-250"
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
const uri = `http://localhost:1337/api/projects?filters[slug]=${slug}`;

// Fetch the product
const { data: project } = await useFetch(uri, { key: slug });

// Empty Variable with projectData reactive object
const projectData = reactive({
  markDown: "",
  logo: "",
  backgroundImage: "",
  body: "",
  boolean: false,
});

// Function to save each info into one variable to use in template
const projectInfo = async () => {
  const response = await fetch(uri);
  const data = await response.json();
  let dataNotation = data.data[0].attributes.intro;
  let background = data.data[0].attributes.project_image_cover_url;
  let projectLogo = data.data[0].attributes.project_logo_url;
  let projectBody = data.data[0].attributes.body;

  projectData.markDown = dataNotation;
  projectData.backgroundImage = background;
  projectData.logo = projectLogo;
  projectData.body = projectBody;
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
  layout: "articles",
});
</script>

<style scoped>
h2 {
  @apply font-bold;
}
</style>
