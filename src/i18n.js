import { createI18n } from 'vue-i18n';
import fr from './lang/fr.json';
import en from './lang/en.json';

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('lang') || 'fr',
  fallbackLocale: 'fr',
  messages: {
    fr,
    en,
  },
});

export default i18n;