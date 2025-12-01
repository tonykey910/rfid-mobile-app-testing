import { createI18n } from 'vue-i18n';
import en from './en';
import zh from './zh';

const locale = (typeof navigator !== 'undefined' && navigator.language.startsWith('zh'))
  ? 'zh'
  : 'en';

const i18n = createI18n({
  legacy: false,
  locale,
  fallbackLocale: 'en',
  messages: {
    en,
    zh
  }
});

export default i18n;
