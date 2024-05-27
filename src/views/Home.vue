<template>
  <navbar-component />
  <main ref="el" class="h-screen">
    <section class="bg-white h-screen">
      <div class="container mx-auto px-10 h-screen">
        <div class="flex flex-wrap items-center h-screen">
          <div class="sm:w-screen lg:w-1/2 md:text-left">
            <div>
              <p class="text-2xl lg:text-3xl text-black">
                Maxime <span class="text-forest-green">Aubin-Forest</span>
              </p>
              <p class="text-md lg:text-lg text-black">
                {{ t('resume') }}
              </p>
              <p class="text-md lg:text-lg text-black">
                {{ t('subresume') }}
              </p>
            </div>
          </div>
          <div class="hidden lg:block sm:w-screen lg:w-1/2 md:text-right">
            <CycleCarousel :list="technologies" />
          </div>
        </div>
      </div>
    </section>
    <section id="resume" class="bg-red-100 h-screen">
      <div class="container mx-auto px-10 h-screen">
        <div class="flex flex-wrap items-center h-screen">
          <div class="mx-auto text-justify">
            <div class="grid grid-cols-3 gap-2">
              <div class="col-span-3 align-top">
                <p class="text-2xl">{{ t('education') }}</p>
              </div>
              <div class="align-top col-span-3 md:col-span-1">
                <p>{{ t('collegeDate') }}</p>
              </div>
              <div class="align-top col-span-3 md:col-span-2">
                <p class="text-forest-green">Cégep du Vieux-Montréal</p>
                <ul>
                  <li>{{ t('formationCompleted') }}</li>
                  <li>{{ t('techniqueInformatique') }}</li>
                </ul>
              </div>
              <div class="col-span-3 align-top">
                <p class="text-2xl">{{ t('experience') }}</p>
              </div>
              <template v-for="job in jobs">
                <div class="align-top col-span-3 md:col-span-1">
                  <p>{{ rt(job.date) }}</p>
                </div>
                <div class="align-top col-span-3 md:col-span-2">
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
                </div>
              </template>
            </div>
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
import { computed } from 'vue'
import { useI18n } from 'vue-i18n';

const { t, tm, rt } = useI18n();
const jobs: any[] = tm('jobs')

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
</script>