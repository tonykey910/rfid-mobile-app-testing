<template>
  <div class="app-shell">
    <header class="app-header">
      <div>
        <p class="eyebrow">RFID · ERP · Mobile</p>
        <h1>{{ t('app.title') }}</h1>
        <p class="subtitle">{{ t('app.subtitle') }}</p>
      </div>
      <LanguageToggle />
    </header>

    <section class="module-nav">
      <ModuleCard
        v-for="module in moduleLinks"
        :key="module.route"
        :title="t(module.title)"
        :description="t(module.description)"
        :icon="module.icon"
        :accent="module.accent"
        @click="navigate(module.route)"
      />
    </section>

    <section class="view-wrapper">
      <RouterView />
    </section>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import LanguageToggle from './components/LanguageToggle.vue';
import ModuleCard from './components/ModuleCard.vue';

const router = useRouter();
const { t } = useI18n();

const moduleLinks = [
  {
    route: '/inbound',
    title: 'modules.inbound.title',
    description: 'modules.inbound.desc',
    icon: '📦',
    accent: '#3b82f6'
  },
  {
    route: '/tag-binding',
    title: 'modules.tag.title',
    description: 'modules.tag.desc',
    icon: '🏷️',
    accent: '#22c55e'
  },
  {
    route: '/transfer',
    title: 'modules.transfer.title',
    description: 'modules.transfer.desc',
    icon: '🔄',
    accent: '#a855f7'
  },
  {
    route: '/receiving',
    title: 'modules.receiving.title',
    description: 'modules.receiving.desc',
    icon: '📥',
    accent: '#f97316'
  },
  {
    route: '/usage',
    title: 'modules.usage.title',
    description: 'modules.usage.desc',
    icon: '📊',
    accent: '#14b8a6'
  },
  {
    route: '/maintenance-plan',
    title: 'modules.maintenancePlan.title',
    description: 'modules.maintenancePlan.desc',
    icon: '🛠️',
    accent: '#ef4444'
  },
  {
    route: '/maintenance-records',
    title: 'modules.maintenanceRecords.title',
    description: 'modules.maintenanceRecords.desc',
    icon: '📝',
    accent: '#eab308'
  },
  {
    route: '/scrap',
    title: 'modules.scrap.title',
    description: 'modules.scrap.desc',
    icon: '🗑️',
    accent: '#6366f1'
  }
];

const navigate = (route) => {
  router.push(route);
};
</script>
