<template>
  <nav class="top-0 absolute w-full items-center justify-between ">
    <div class="container mx-auto flex flex-wrap items-center justify-between">
      <div class="xl:flex flex-grow items-center bg-white xl:bg-transparent xl:shadow-none"
        v-bind:class="{ 'hidden': !showMenu, 'block': showMenu }">
        <ul class="pr-12 flex flex-col xl:flex-row list-none xl:ml-auto">
          <li class="flex items-center">
            <a class="px-3 py-4 flex items-center" href="mailto:maxime.af@outlook.com" title="Courriel"><i
                class="xl:text-gray-300 text-gray-500 fa-solid fa-envelope text-3xl leading-xl "></i><span
                class="xl:hidden inline-block ml-2">Share</span></a>
          </li>
          <li class="flex items-center">
            <a class="px-3 py-4 flex items-center" title="LinkedIn"
              href="https://www.linkedin.com/in/maxime-a-375134a4/"><i
                class="xl:text-gray-300 text-gray-500 fa-brands fa-linkedin text-3xl leading-xl "></i><span
                class="xl:hidden inline-block ml-2">Share</span></a>
          </li>
          <li class="flex items-center">
            <a class="px-3 py-4 flex items-center" title="GitHub" href="https://github.com/MaxForest"><i
                class="xl:text-gray-300 text-gray-500 fab fa-github text-3xl leading-xl "></i><span
                class="xl:hidden inline-block ml-2">Star</span></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleNavbar: function () {
      this.showMenu = !this.showMenu;
    }
  }
}
</script>
