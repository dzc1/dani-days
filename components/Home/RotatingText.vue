<template>
  <section
    class="h-[600px] flex items-center justify-center bg-white font-extralight text-4xl"
  >
    <div>
      <span>I Love </span>
      <span
        class="font-bold"
        v-for="(sentence, index) in sentences"
        :key="index"
      >
        <span v-if="visible === index">{{ sentence }}</span>
      </span>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref, onMounted } from "vue";

const sentences = reactive([
  "to design",
  "cats",
  "sleeping",
  "movies",
  "food",
  "video games",
  "festivals",
  "the beach",
  "traveling",
]);
const visible = ref(0);

const displayText = () => {
  visible.value = (visible.value + 1) % sentences.length;
};

onMounted(() => {
  setInterval(() => {
    displayText();
  }, 2000);
});
</script>

<style scoped>
.typewriter {
  /* display: inline-block; */
  /* overflow: hidden; */
  /* animation: typing 2s steps(12, end) infinite; */
}

@keyframes typing {
  from {
    width: 0%;
  }

  to {
    width: 100%;
  }
}
#dynamicContent {
  white-space: nowrap;
}
</style>
