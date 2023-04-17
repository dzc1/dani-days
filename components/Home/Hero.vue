<template>
  <section id="desktop">
    <div class="section-container">
      <div class="card-container">
        <!-- Work Section -->
        <div class="card">
          <div class="bg-black bg-opacity-0">
            <img
              class="img-fluid"
              :src="daniela.work.img"
              alt=""
              style="object-fit: cover"
            />
            <div
              v-if="!daniela.work.hover"
              class="absolute top-0 left-0 w-full h-full bg-black card-opacity"
            ></div>
          </div>
          <div
            class="card-text-container"
            @mouseover="workSectionHover"
            @mouseout="workSectionHover"
          >
            <div class="card-padding">
              <div
                :class="
                  daniela.work.hover
                    ? 'animate__animated animate__slideInUp'
                    : ' '
                "
              >
                <h4 id="work-heading" class="opacity-70">
                  {{ daniela.work.heading }}
                </h4>
                <p class="w-1/8" v-if="daniela.work.hover">
                  {{ daniela.work.text }}
                </p>
              </div>

              <div
                class="w-1/2 h-0.5 transition-all ease-in-out bg-white opacity-50"
                :class="
                  daniela.work.hover
                    ? 'w-full opacity-100 duration-700'
                    : ' duration-200'
                "
              ></div>
            </div>
          </div>
        </div>
        <!-- Bio Section -->
        <div class="card">
          <img
            class="img-fluid"
            :src="daniela.bio.img"
            alt=""
            style="object-fit: cover"
          />
          <div
            v-if="!daniela.bio.hover"
            class="absolute top-0 left-0 w-full h-full bg-black card-opacity"
          ></div>
          <div
            class="card-text-container"
            @mouseover="bioSectionHover"
            @mouseout="bioSectionHover"
          >
            <div class="card-padding">
              <div
                :class="
                  daniela.bio.hover
                    ? 'animate__animated animate__slideInUp'
                    : ''
                "
              >
                <h4 id="bio-heading" class="opacity-70">
                  {{ daniela.bio.heading }}
                </h4>
                <p v-if="daniela.bio.hover" class="w-1/8">
                  {{ daniela.bio.text }}
                </p>
              </div>
              <div
                class="w-1/2 h-0.5 transition-all ease-in-out bg-white opacity-50"
                :class="
                  daniela.bio.hover
                    ? 'w-full opacity-100 duration-700'
                    : ' duration-200'
                "
              ></div>
            </div>
          </div>
        </div>
        <!-- Contact Section -->
        <div class="card">
          <img
            class="img-fluid"
            :src="daniela.contact.img"
            alt=""
            style="object-fit: cover"
          />
          <div
            v-if="!daniela.contact.hover"
            class="absolute top-0 left-0 w-full h-full bg-black card-opacity"
          ></div>
          <div
            class="card-text-container"
            @mouseover="contactSectionHover"
            @mouseout="contactSectionHover"
          >
            <div class="card-padding">
              <div
                :class="
                  daniela.contact.hover
                    ? 'animate__animated animate__slideInUp'
                    : ' '
                "
              >
                <h4 id="contact-heading" class="opacity-70">
                  {{ daniela.contact.heading }}
                </h4>
                <p v-if="daniela.contact.hover" class="w-1/8">
                  {{ daniela.contact.text }}
                </p>
              </div>
              <div
                class="w-1/2 h-0.5 transition-all ease-in-out bg-white opacity-50"
                :class="
                  daniela.contact.hover
                    ? 'w-full opacity-100 duration-700'
                    : ' duration-200'
                "
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="mobile">
    <carousel :items-to-show="1" ref="carousel" :autoplay="3000">
      <slide v-for="(col, index) in daniela" :key="index">
        <div class="card">
          <div class="bg-black bg-opacity-0">
            <img
              class="img-fluid"
              :src="col.img"
              alt=""
              style="object-fit: cover"
            />
            <div
              class="absolute top-0 left-0 w-full h-full bg-black card-opacity"
            ></div>
          </div>
          <div class="card-text-container">
            <div class="card-padding">
              <h4 id="work-heading" class="opacity-90">
                {{ col.heading }}
              </h4>
              <p class="w-1/8 opacity-90">
                {{ col.text }}
              </p>
              <div
                class="w-1/2 h-0.5 transition-all ease-in-out bg-white opacity-50"
              ></div>
            </div>
          </div>
        </div>
      </slide>

      <template #addons>
        <!-- <navigation /> -->
        <pagination />
      </template>
    </carousel>
  </section>
</template>

<script setup>
import "animate.css";
import "assets/css/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

const daniela = reactive({
  contact: {
    img: "https://res.cloudinary.com/dnsnkrcru/image/upload/v1680523704/dani-web/Homepage/section-hero/contact-hero-bg_noc8bz.png",
    text: "Let's collaborate and create meaningful data experiences together. Feel free to get in touch with me",
    heading: "Contact",
    hover: false,
  },
  work: {
    img: "https://res.cloudinary.com/dnsnkrcru/image/upload/v1680523704/dani-web/Homepage/section-hero/hero-work-bg_xqkckf.png",
    text: "Explore my portfolio and experience some of my projects including Web, Apop and WebApp designs",
    heading: "Work",
    hover: false,
  },
  bio: {
    img: "https://res.cloudinary.com/dnsnkrcru/image/upload/v1680523704/dani-web/Homepage/section-hero/bio-hero-bg_thxe2r.png",
    text: "Discover the person behind the pixels and learn how my background and experiences shape my approach to designing for people",
    heading: "Biography",
    hover: false,
  },
});

// Function to show/hide - contact section text
const contactSectionHover = () => {
  //hover.value = !hover.value;
  daniela.contact.hover = !daniela.contact.hover;
  const title = document.getElementById("contact-heading");
  if (daniela.contact.hover) {
    title.classList.remove("opacity-70");
  } else {
    title.classList.add("opacity-70");
  }
};

// Function to show/hide - work section text
const workSectionHover = () => {
  //hover.value = !hover.value;
  daniela.work.hover = !daniela.work.hover;
  const title = document.getElementById("work-heading");
  if (daniela.work.hover) {
    title.classList.remove("opacity-70");
  } else {
    title.classList.add("opacity-70");
  }
};

// Function to show/hide - work section text
const bioSectionHover = () => {
  //hover.value = !hover.value;
  daniela.bio.hover = !daniela.bio.hover;
  const title = document.getElementById("bio-heading");
  if (daniela.bio.hover) {
    title.classList.remove("opacity-70");
  } else {
    title.classList.add("opacity-70");
  }
};
</script>

<style scoped>
#desktop {
  @apply hidden md:block;
}
#mobile {
  @apply block md:hidden;
}
.section-container {
  @apply mx-auto lg:max-w-none;
}

.card-container {
  @apply flex flex-wrap;
}

/* Card CSS */
.card {
  @apply w-full lg:w-1/3 relative h-[790px] md:h-[760px];
}

.card img {
  @apply absolute top-0 left-0 w-full h-full;
}

.card-text-container {
  @apply max-w-xl mx-auto text-center pt-10 px-5 lg:px-10 relative flex items-end h-full;
}

.card-padding {
  @apply mb-40 md:mb-24;
}

.card-text-container h4 {
  @apply text-white text-3xl md:text-4xl mb-8   text-left font-extralight;
}

.card-text-container p {
  @apply text-white  text-lg md:text-2xl text-left mb-8 tracking-wide font-extralight;
}

.card-text-container hr {
  @apply border border-white my-2 opacity-70 w-1/2;
}

.card-opacity {
  @apply bg-opacity-60;
}

/* Animation References */
.animate__animated.animate__slideInUp {
  --animate-duration: 0.5s;
}
.animate__animated.animate__slideOutDown {
  --animate-duration: 0.5s;
}
</style>
