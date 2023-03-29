<template>
  <section>
    <div class="section-container">
      <div class="card-container">
        <!-- Work Section -->
        <div class="card">
          <div class="bg-black bg-opacity-0">
            <img
              class="img-fluid"
              :src="workImg"
              alt=""
              style="object-fit: cover"
            />
            <div
              v-if="!workHover"
              class="absolute top-0 left-0 w-full h-full bg-black card-opacity"
            ></div>
          </div>
          <div
            class="card-text-container"
            @mouseover="workSectionHover"
            @mouseout="workSectionHover"
          >
            <div class="card-padding">
              <h4 id="work-heading" class="opacity-70">{{ workHeading }}</h4>
              <p class="w-1/8" v-if="workHover">
                {{ workText }}
              </p>
              <hr />
            </div>
          </div>
        </div>
        <!-- Bio Section -->
        <div class="card">
          <img
            class="img-fluid"
            :src="bioImg"
            alt=""
            style="object-fit: cover"
          />
          <div
            v-if="!bioHover"
            class="absolute top-0 left-0 w-full h-full bg-black card-opacity"
          ></div>
          <div
            class="card-text-container"
            @mouseover="bioSectionHover"
            @mouseout="bioSectionHover"
          >
            <div class="card-padding">
              <h4 id="bio-heading" class="opacity-70">
                {{ bioHeading }}
              </h4>
              <p v-if="bioHover" class="w-1/8">
                {{ bioText }}
              </p>
              <hr />
            </div>
          </div>
        </div>
        <!-- Contact Section -->
        <div class="card">
          <img
            class="img-fluid"
            :src="contactImg"
            alt=""
            style="object-fit: cover"
          />
          <div
            v-if="!contactHover"
            class="absolute top-0 left-0 w-full h-full bg-black card-opacity"
          ></div>
          <div
            class="card-text-container"
            @mouseover="contactSectionHover"
            @mouseout="contactSectionHover"
          >
            <div class="mb-24">
              <h4 id="contact-heading" class="opacity-70">
                {{ contactHeading }}
              </h4>
              <p v-if="contactHover" class="w-1/8">
                {{ contactText }}
              </p>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

// CONTACT SECTION LOGIC
// Contact Hover Section
const contactImg = ref(
  "https://res.cloudinary.com/dnsnkrcru/image/upload/v1679998806/dani-web/dani-img-testing-folder/Home/Hero%20Section%20images/Contact_me-hover_rrkavp.png"
);
const contactHeading = ref("Contact");
const contactText = ref(
  "Let's collaborate and create meaningful data experiences together. Feel free to get in touch with me"
);
const contactHover = ref(false);

// Function to show/hide - contact section text
const contactSectionHover = () => {
  //hover.value = !hover.value;
  contactHover.value = !contactHover.value;
  const title = document.getElementById("contact-heading");
  if (contactHover.value) {
    title.classList.remove("opacity-70");
  } else {
    title.classList.add("opacity-70");
  }
};
// -------------------------------------------
// End Logic Section
// -------------------------------------------

// -------------------------------------------
// -------------------------------------------
// WORK SECTION LOGIC
// work Hover Section
const workImg = ref(
  "https://res.cloudinary.com/dnsnkrcru/image/upload/v1679998806/dani-web/dani-img-testing-folder/Home/Hero%20Section%20images/Work-hover_ocplpd.png"
);
const workHeading = ref("Work");
const workText = ref(
  "Explore my portfolio and experience some of my projects including Web, Apop and WebApp designs"
);
const workHover = ref(false);

// Function to show/hide - work section text
const workSectionHover = () => {
  //hover.value = !hover.value;
  workHover.value = !workHover.value;
  const title = document.getElementById("work-heading");
  console.log(title);
  if (workHover.value) {
    title.classList.remove("opacity-70");
  } else {
    title.classList.add("opacity-70");
  }
};
// -------------------------------------------
// End Logic Section
// -------------------------------------------

// -------------------------------------------
// -------------------------------------------
// BIOGRAPHY SECTION LOGIC
// Biography Hover Section
const bioImg = ref(
  "https://res.cloudinary.com/dnsnkrcru/image/upload/v1679998806/dani-web/dani-img-testing-folder/Home/Hero%20Section%20images/Biography-hover_prkpay.png"
);
const bioHeading = ref("Biography");
const bioText = ref(
  "Discover the person behind the pixels and learn how my background and experiences shape my approach to designing for people"
);
const bioHover = ref(false);

// Function to show/hide - work section text
const bioSectionHover = () => {
  //hover.value = !hover.value;
  bioHover.value = !bioHover.value;
  const title = document.getElementById("bio-heading");
  if (bioHover.value) {
    title.classList.remove("opacity-70");
  } else {
    title.classList.add("opacity-70");
  }
};
// -------------------------------------------
// End Logic Section
// -------------------------------------------
</script>

<style scoped>
.section-container {
  @apply mx-auto lg:max-w-none;
}

.card-container {
  @apply flex flex-wrap;
}

/* Card CSS */
.card {
  @apply w-full lg:w-1/3 relative h-[760px];
}

.card img {
  @apply absolute top-0 left-0 w-full h-full;
}

.card-text-container {
  @apply max-w-xl mx-auto text-center pt-10 px-5 lg:px-10 relative flex items-end h-full;
}

.card-padding {
  @apply mb-24;
}

.card-text-container h4 {
  @apply text-white text-4xl mb-8   text-left font-extralight;
}

.card-text-container p {
  @apply text-white text-xl text-left mb-8 tracking-wide font-extralight;
}

.card-text-container hr {
  @apply border border-white my-2 opacity-70 w-1/2;
}

.card-opacity {
  @apply bg-opacity-60;
}
</style>
