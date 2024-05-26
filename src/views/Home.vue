<template>
  <navbar-component />
  <main ref="el" class="h-screen">
    <section class="bg-white h-screen">
      <div class="container mx-auto px-4 h-screen">
        <div class="flex flex-wrap items-center h-screen">
          <div class="sm:w-screen md:w-1/2 text-left mx-auto">
            <div>
              <p class="text-black text-4xl">
                Maxime <span class="text-forest-green">Aubin-Forest</span>
              </p>
              <p class="text-lg text-black">
                {{ t('resume') }}
              </p>
              <p class="text-lg text-black">
                {{ t('subresume') }}
              </p>
            </div>
          </div>
          <div class="sm:w-screen md:w-1/2 text-right mx-auto">
            <CycleCarousel :list="technologies" />
          </div>
          <div class="pb-10 absolute bottom-0 inset-x-1/2">
            <div ref="bounceSkills"
              class="p-3 text-center inline-flex items-center justify-center shadow-lg w-16 h-16 rounded-full bg-gray-100 -translate-y-1/4">
              <a title="Go to skills" href="#resume"><i class="text-forest-green fa-solid fa-arrow-down"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="resume" class="bg-red-100 h-screen">
      <div class="container mx-auto px-4 h-screen">
        <div class="flex flex-wrap items-center h-screen">
          <div class="mx-auto text-justify">
            <table class="table-auto">
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="align-top">
                    <p class="text-2xl">{{ t('education') }}</p>
                  </td>
                  <td class="align-top"></td>
                </tr>
                <tr>
                  <td class="align-top"></td>
                  <td class="align-top">
                    <p>Jan. 2015 - Mai 2016</p>
                    <p class="text-forest-green">Cégep du Vieux-Montréal</p>
                    <ul>
                      <li>{{ t('formationCompleted') }}</li>
                      <li>{{ t('techniqueInformatique') }}</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td class="align-top">
                    <p class="text-2xl">{{ t('experience') }}</p>
                  </td>
                  <td></td>
                </tr>
                <tr v-for="job in jobs">
                  <td></td>
                  <td class="align-top">
                    <p>{{ rt(job.date) }}</p>
                    <p>
                      <span class="text-forest-green">{{ rt(job.company) }}</span> - {{ t('analyst-programmer') }}
                      <br>
                      {{ rt(job.city) }}
                      <br>
                      {{ rt(job.description) }}
                    </p>
                    <ul>
                      <li v-for="bullet in job.li">{{ rt(bullet) }}</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
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
import { useI18n } from 'vue-i18n';

const { t, tm, rt } = useI18n();
const jobs:any[] = tm('jobs')

const bounceSkills = ref(null)
const technologies = computed(() => ['C# | .net Framework | DevExpress',
  'Vue 3 | Vite | Nuxt',
  'Javascript | jQuery',
  'HTML | CSS | Tailwind',
  'GitHub | GitLab | Azure Devops',
  'Jira | Confluence',
  'Xamarin | Maui',
  'PHP | Yii Framework',
  'Python | Tornado Framework',
  'SQL | mySQL',
  'Stimulsoft Reports | SSRS'])

onMounted(() => {
  setTimeout(() => bounceSkills.value.classList.add('animate-bounce-slow'), 1500)
})
</script>