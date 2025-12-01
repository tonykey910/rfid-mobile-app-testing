<template>
  <div class="grid two">
    <div class="card">
      <p class="section-title">{{ t('scrap.title') }}</p>
      <table class="table">
        <thead>
          <tr>
            <th>{{ t('common.asset') }}</th>
            <th>{{ t('scrap.method') }}</th>
            <th>{{ t('scrap.compliance') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in scrapItems" :key="item.asset">
            <td>{{ item.asset }}</td>
            <td>{{ item.method }}</td>
            <td>{{ item.compliance }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <RFIDScannerPad :label="t('scrap.title')" />
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { scrapItems } from '../data/mockData';
import RFIDScannerPad from '../components/RFIDScannerPad.vue';

const { t } = useI18n();
</script>
