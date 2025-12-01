<template>
  <div class="grid two">
    <div class="card">
      <p class="section-title">{{ t('usage.title') }}</p>
      <table class="table">
        <thead>
          <tr>
            <th>{{ t('common.asset') }}</th>
            <th>{{ t('usage.checkpoints') }}</th>
            <th>{{ t('usage.runtime') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in usage" :key="item.asset">
            <td>{{ item.asset }}</td>
            <td>{{ item.checkpoints }}</td>
            <td>{{ item.runtime }}h</td>
          </tr>
        </tbody>
      </table>
    </div>
    <RFIDScannerPad :label="t('usage.title')" />
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { usage } from '../data/mockData';
import RFIDScannerPad from '../components/RFIDScannerPad.vue';

const { t } = useI18n();
</script>
