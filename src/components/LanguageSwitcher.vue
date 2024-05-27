<template>
    <a class="{{ `${locale.value === 'fr' ? 'hidden' : '' } cursor-pointer py-2 lg:text-lg text-gray-300 hover:text-forest-green border-0 bg-transparent` }}" @click="setLanguage('fr')">Français</a>
    <a class="{{ `${locale.value === 'en' ? 'hidden' : '' } cursor-pointer px-5 py-2 lg:text-lg text-gray-300 hover:text-forest-green border-0 bg-transparent` }}" @click="setLanguage('en')">English</a>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { watchEffect, ref, onMounted } from 'vue';

const { locale } = useI18n();

console.log(locale.value === 'fr')

const setLanguage = (newLang: string) => {
    locale.value = newLang;
    localStorage.setItem('lang', newLang);
};

watchEffect(() => {
    const storedLang = localStorage.getItem('lang');

    if (storedLang) {
        locale.value = storedLang;
    }
});

</script>