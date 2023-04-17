<template>
  <section class="rotating-text-section">
    <h1>
      I love <span class="font-bold">{{ part }}</span>
    </h1>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

// NEW TEST
const words = [
  "to design",
  "cats",
  "sleeping",
  "movies",
  "food",
  "video games",
  "festivals",
  "the beach",
  "traveling",
];
let part = ref("");
let i = ref(0);
let offset = ref(0);
let forwards = ref(true);
let skipCount = ref(0);
const skipDelay = 15;
const speed = 60;

const wordFlick = () => {
  setInterval(() => {
    if (forwards.value) {
      if (offset.value >= words[i.value].length) {
        skipCount.value++;
        if (skipCount.value === skipDelay) {
          forwards.value = false;
          skipCount.value = 0;
        }
      }
    } else {
      if (offset.value === 0) {
        forwards.value = true;
        i.value++;
        offset.value = 0;
        if (i.value >= words.length) {
          i.value = 0;
        }
      }
    }
    part.value = words[i.value].substr(0, offset.value);
    if (skipCount.value === 0) {
      if (forwards.value) {
        offset.value++;
      } else {
        offset.value--;
      }
    }
  }, speed);
};

onMounted(() => {
  wordFlick();
});
</script>

<style scoped>
.rotating-text-section {
  @apply h-[300px] md:h-[600px] flex items-center justify-center bg-white font-extralight text-xl md:text-4xl;
}
</style>
