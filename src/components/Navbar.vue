<template>
  <nav class="top-0 absolute pt-10 w-full">
    <div class="container mx-auto px-4">
      <div class="flex flex-grow items-center float-right">
        <LanguageSwitcher />
        <ul class="pr-12 flex flex-row list-none xl:ml-auto">
          <li class="flex items-center">
            <a class="px-3 py-4 flex items-center" href="mailto:maxime.af@outlook.com" title="Courriel"><i
                class="text-gray-300 hover:text-forest-green fa-solid fa-envelope text-3xl leading-xl "></i></a>
          </li>
          <li class="flex items-center">
            <a class="px-3 py-4 flex items-center" title="LinkedIn"
              href="https://www.linkedin.com/in/maxime-a-375134a4/"><i
                class="text-gray-300 hover:text-forest-green fa-brands fa-linkedin text-3xl leading-xl "></i></a>
          </li>
          <li class="flex items-center">
            <a class="px-3 py-4 flex items-center" title="GitHub" href="https://github.com/MaxForest"><i
                class="text-gray-300 hover:text-forest-green fab fa-github text-3xl leading-xl "></i></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import LanguageSwitcher from './LanguageSwitcher.vue';
</script>