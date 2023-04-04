<template>
  <section class="2xl:h-[350px] md:h-[600px] bg-[#121212]">
    <div class="p-4 md:p-8">
      <div class="flex flex-wrap items-baseline justify-center">
        <!-- Left Side -->
        <div
          class="w-full md:w-2/3 mb-4 md:mb-0 text-white font-extralight p-4 md:p-8"
        >
          <p class="text-xl mb-4">
            Thank you for taking the time to read through my portfolio. I hope
            you got a glimpse of who I am and as a UX/UI designer.
          </p>
          <p class="text-xl mb-4">
            If you're curious about anything or would like to chat further about
            a potential project or collaboration, don't hesitate to reach out to
            me
          </p>
          <p class="text-xl mb-4">
            I'm always open to explore new opportunities and collaborations
          </p>
          <p class="text-xl mb-4">
            Thanks again for your interest, and I look forward to hearing from
            you soon
          </p>
        </div>
        <!-- Right Side -->
        <div class="w-full md:w-1/3 md:mb-0 text-white p-4 md:p-8">
          <p class="text-lg md:text-xl mb-4 flex items-center">
            <i class="material-icons mr-2">mail</i>
            <a
              href="https://mail.google.com/mail/?view=cm&to=danidl24@gmail.com"
              target="_blank"
              >Send me a message</a
            >
          </p>
          <p class="text-lg md:text-xl mb-4 flex items-baseline">
            <img class="mr-4" :src="linkedinIcon" alt="" />
            <a
              href="https://www.linkedin.com/in/danieladiazlabarca/"
              target="_blank"
              rel="noreferrer noopener"
              >Linkedin Profile</a
            >
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
const linkedinIcon = ref(
  "https://res.cloudinary.com/dnsnkrcru/image/upload/v1680615043/dani-web/Homepage/section-footer/LinkedIn_xvckkq.svg"
);
</script>

<style scoped></style>
