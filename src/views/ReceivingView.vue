<template>
  <div class="grid two">
    <div class="card">
      <p class="section-title">{{ t('receiving.title') }}</p>
      <table class="table">
        <thead>
          <tr>
            <th>#</th>
            <th>{{ t('receiving.proof') }}</th>
            <th>{{ t('receiving.discrepancy') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in receipts" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.proof }}</td>
            <td>{{ item.discrepancy }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <RFIDScannerPad :label="t('receiving.title')" />
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { receipts } from '../data/mockData';
import RFIDScannerPad from '../components/RFIDScannerPad.vue';

const { t } = useI18n();
</script>
