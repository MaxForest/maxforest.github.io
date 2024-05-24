<template>
  <navbar-component />
  <main ref="el" class="h-full">
    <section class="bg-white h-full">
      <div class="container mx-auto px-4 h-full">
        <div class="flex flex-wrap items-center h-full">
          <div class="w-1/2 text-left mx-auto">
            <div class="pr-12">
              <p class="text-black text-4xl">
                Maxime <span class="text-forest-green">Aubin-Forest</span>
              </p>
              <p class="text-lg text-black">
                Programmeur-analyste
              </p>
              <p class="text-lg text-black">
                Programmeur-analyste possédant plus de sept ans
                d'expérience en web, application Windows et mobile.
                Expertise en solutions back-end et front- end.
                <br>
                Je maîtrise le français et l'anglais.
              </p>
            </div>
          </div>
          <div class="w-1/2 text-right mx-auto">
            <CycleCarousel :list="technologies" />
          </div>
          <!-- <div class="pb-10 absolute bottom-0 inset-x-1/2">
            <div ref="bounceSkills"
              class="p-3 text-center inline-flex items-center justify-center shadow-lg w-16 h-16 rounded-full bg-gray-100 -translate-y-1/4">
              <a title="Go to skills" href="#skills"><i class="text-forest-green fa-solid fa-arrow-down"></i></a>
            </div>
          </div> -->
        </div>
      </div>
    </section>
    <section class="bg-red-100 h-full">
      <div class="container mx-auto px-4 h-full">
        <div class="flex flex-wrap items-center h-full">
          <div class="mx-auto text-justify">
            <table class="table-auto">
              <thead>
                <tr>
                  <th class="align-top"></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="align-top">
                    <p class="text-2xl">Éducation</p>
                  </td>
                  <td class="align-top"></td>
                  <td class="align-top">
                    <p>Jan. 2015 - Mai 2016</p>
                    <p class="text-forest-green">Cégep du Vieux-Montréal</p>
                    <ul>
                      <li>Formation collégial complétée</li>
                      <li>Technique de l'informatique en formation intensive</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td class="align-top">
                    <p class="text-2xl">Expérience profesionnelle</p>
                  </td>
                  <td class="align-top"></td>
                  <td class="align-top">
                    <p>Juin 2023 - Mai 2024</p>
                    <p>
                      <span class="text-forest-green">NMédia</span> - Programmeur-analyste
                      <br>
                      Drummondville | Télétravail
                      <br>
                      Programmation diversifiée sous mandats clients
                      en plusieurs équipes. Plusieurs projets en
                      parallèle.
                    </p>
                    <ul>
                      <li>
                        Programmation en C# sous .net 3.1 à 8 et en
                        Angular, Vue 3 & Nuxt.js au niveau du front-end;</li>
                      <li>
                        Rapport SSRS, développement de procédure
                        stockée, optimisation SQL, usage du pivot,
                        création de vues;
                      </li>
                      <li>Développement mobile sous Maui;</li>
                      <li>Fonctionnement agile sous Jira;</li>
                      <li>Le poste a été coupé.</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td class="align-top"></td>
                  <td class="align-top">
                    <p>Oct. 2018 - Jan. 2023</p>
                    <p>
                      <span class="text-forest-green">Daway Solutions</span> - Programmeur-analyste
                      <br>
                      Brossard | Télétravail
                      <br>
                      Programmeur principal du projet Sass de
                      conformité d'asphalte et de béton, incluant
                      l'analyse technique, la programmation, le
                      support client et la nomenclature devops.
                    </p>
                    <ul>
                      <li>Programmation en C# sous .net 4.8 en MVC et
                        en HTML, CSS, jQuery au niveau du front-end;
                      </li>
                      <li>
                        Approche code first sous Entity Framework;
                        Base de données en MS SQL;
                      </li>
                      <li>Génération de rapports sous Stimulsoft;</li>
                      <li>Dirigé une équipe de 2 programmeurs;</li>
                      <li>Départ pour raisons personnelles.</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td class="align-top"></td>
                  <td class="align-top">
                    <p>Nov. 2016 - Oct. 2018</p>
                    <p>
                      <span class="text-forest-green">Gameloft</span> - Programmeur-analyste
                      <br>
                      Montréal | Hybride
                      <br>
                      Collaboration avec une équipe basée sur site
                      et en Bulgarie. Disposition du temps entre
                      programmation full stack et documentation.
                    </p>
                    <ul>
                      <li>Programmation en PHP sur yii et en Python sur
                        tornado framework et en HTML, CSS, jQuery au
                        niveau du front-end;</li>
                      <li>Base de données en mySQL;</li>
                      <li>Fonctionnement agile sur GitLab.</li>
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

// const bounceSkills = ref(null)
const technologies = computed(() => ['C# | .net Framework | DevExpress', 'Vue 3 | Vite | Nuxt', 'Javascript | jQuery', 'HTML | CSS | Tailwind', 'GitHub | GitLab | Azure Devops', 'Jira | Confluence', 'Xamarin | Maui', 'PHP | Yii Framework', 'Python | Tornado Framework', 'SQL | mySQL', 'Stimulsoft Reports | SSRS'])

// onMounted(() => {
//   setTimeout(() => bounceSkills.value.classList.add('animate-bounce-slow'), 1500)
// })
</script>