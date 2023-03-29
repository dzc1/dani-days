<template>
  <section
    class="relative flex items-center justify-center overflow-hidden p-12"
  >
    <div
      class="relative z-30 text-2xl text-white bg-[#1E1511] bg-opacity-70 w-3/4"
    >
      <div class="text-center font-light p-14">
        <h4 class="mb-8">Hi there, I'm <span class="font-bold">Dani</span></h4>
        <p>A <span class="font-bold">UX/UI Designer</span> based Barcelona.</p>
        <p class="mb-8">
          Yes, I know it sounds crazy, but my background is in dentistry. Long
          story short, I found my true passion in design and decided to pursue
          it.
        </p>
        <p class="mb-8">
          As a person, I'm determined, outgoing, motivated, and creative. I
          thrive on new challenges and am always looking for ways to push myself
          further.
        </p>
        <p>
          When it comes to design, I specialize in creating strategic solutions
          that prioritize user experience while maintaining a sleek and visually
          pleasing aesthetic. For me, less is always better -
          <span>simplicity is the key to creating great designs.</span>
        </p>
      </div>
    </div>
    <video autoplay loop muted class="w-full object-cover absolute z-10">
      <source :src="videoUrl" type="video/mp4" />
    </video>
  </section>
</template>

<script setup>
import { ref } from "vue";

const videoUrl = ref(
  "https://res.cloudinary.com/dnsnkrcru/video/upload/v1679998793/dani-web/dani-img-testing-folder/Home/Biography_video_k1tl5o.mp4"
);
</script>

<style scoped>
/* Add any necessary styles here, such as height for the section */
section {
  height: 650px;
}
</style>
