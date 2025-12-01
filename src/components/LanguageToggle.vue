<template>
  <div class="language-toggle" role="group" aria-label="Language selector">
    <button
      v-for="lang in languages"
      :key="lang.code"
      :class="['chip', current === lang.code ? 'chip--active' : '']"
      @click="switchLang(lang.code)">
      {{ lang.label }}
    </button>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { locale, availableLocales } = useI18n();
const languages = availableLocales.map((code) => ({
  code,
  label: code === 'zh' ? '中文' : 'EN'
}));

const current = locale;

const switchLang = (code) => {
  locale.value = code;
};
</script>
