<template>
  <nav class="md:top-0 lg:absolute md:pt-10 w-full">
    <div class="container mx-auto px-10">
      <div class="flex flex-grow items-center md:float-right">
        <LanguageSwitcher />
        <ul class="md:pr-12 flex flex-row list-none">
          <li class="flex items-center">
            <a class="px-3 py-4 flex items-center" href="mailto:maxime.af@outlook.com" title="Courriel"><i
                class="text-gray-300 hover:text-forest-green fa-solid fa-envelope sm:text-sm md:text-md lg:text-lg"></i></a>
          </li>
          <li class="flex items-center">
            <a class="px-3 py-4 flex items-center" title="LinkedIn"
              href="https://www.linkedin.com/in/maxime-a-375134a4/"><i
                class="text-gray-300 hover:text-forest-green fa-brands fa-linkedin sm:text-sm md:text-md lg:text-lg"></i></a>
          </li>
          <li class="flex items-center">
            <a class="px-3 py-4 flex items-center" title="GitHub" href="https://github.com/MaxForest"><i
                class="text-gray-300 hover:text-forest-green fab fa-github sm:text-sm md:text-md lg:text-lg"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import LanguageSwitcher from './LanguageSwitcher.vue';
</script>