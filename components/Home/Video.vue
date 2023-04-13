<template>
  <section>
    <div>
      <div>
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
    <video autoplay loop muted>
      <source :src="videoUrl" type="video/mp4" />
    </video>
  </section>
</template>

<script setup>
import { ref } from "vue";

const videoUrl = ref(
  "https://res.cloudinary.com/dnsnkrcru/video/upload/v1680540610/dani-web/Homepage/section-video/Biography_video_wdkgsc.mp4"
);
</script>

<style scoped>
section {
  @apply relative flex items-center justify-center overflow-hidden md:p-12 h-[850px];
}

section > div {
  @apply relative z-30 text-xl md:text-2xl text-white bg-[#1E1511] bg-opacity-70 w-4/5 md:w-3/4;
}

section > div > div {
  @apply text-center font-light p-8 md:p-14;
}

section video {
  @apply w-full object-cover absolute z-10 h-full;
}
</style>
