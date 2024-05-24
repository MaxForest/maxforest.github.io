<template>
  <navbar-component />
  <main ref="el" class="h-full">
    <section class="bg-white h-full">
      <div class="container mx-auto h-full">
        <div class="flex flex-wrap items-center h-full">
          <div class="w-1/2 text-left mx-auto">
            <div class="pr-12">
              <p class="text-black text-4xl">
                Maxime Aubin-Forest
              </p>
              <p class="text-lg text-gray-300">
                Programmeur-analyste
              </p>
            </div>
          </div>
          <div class="w-1/2 text-right mx-auto">
            <CycleCarousel :list="technologies" />
          </div>
          <!-- <div class="pb-10 absolute bottom-0 inset-x-1/2">
            <div ref="bounceSkills"
              class="text-gray-600 p-3 text-center inline-flex items-center justify-center shadow-lg w-16 h-16 rounded-full bg-gray-100 -translate-y-1/4">
              <a title="Go to skills" href="#skills"><i class="fa-solid fa-arrow-down"></i></a>
            </div>
          </div> -->
        </div>
      </div>
    </section>
    <!-- <section class="bg-red-100 h-full">
      <div class="container mx-auto h-full">
        <div class="flex flex-wrap items-center h-full">
          <div class="w-1/2 text-left mx-auto">
            <div
              class="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
              <i class="fas fa-user-friends text-xl"></i>
            </div>
            <h3 class="text-3xl mb-2 font-semibold leading-normal">
              Lorem ipsum </h3>
            <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
              Lorem ipsum
            </p>
          </div>
          <div class="w-1/2 text-left mx-auto">
            <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-pink-600">
              <img alt="..."
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1051&amp;q=80"
                class="w-full align-middle rounded-t-lg" />
              <blockquote class="relative p-8 mb-4">
                <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95"
                  class="absolute left-0 w-full block" style="height: 95px; top: -94px;">
                  <polygon points="-30,95 583,95 583,65" class="text-pink-600 fill-current"></polygon>
                </svg>
                <h4 class="text-xl font-bold text-white">
                  Top Notch Services
                </h4>
                <p class="text-md font-light mt-2 text-white">
                  Lorem ipsum
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section> -->
    <!-- <footer-component /> -->
  </main>
</template>
<script lang="ts">
import NavbarComponent from "../components/Navbar.vue";
import FooterComponent from "../components/Footer.vue";
import CycleCarousel from "../components/CycleCarousel.vue";

export default {
  name: "landing-page",
  components: {
    NavbarComponent,
    FooterComponent
  }
}
</script>
<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

const bounceSkills = ref(null)
const technologies = computed(() => ['Vue 3 & Vite', 'Tailwind', 'GitHub', 'Three.js', '.net Framework', 'Xamarin / Maui', 'PHP', 'Python', 'SQL'])

onMounted(() => {
  setTimeout(() => bounceSkills.value.classList.add('animate-bounce-slow'), 1500)
})
</script>