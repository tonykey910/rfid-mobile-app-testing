<template>
  <div class="grid two">
    <div class="card">
      <p class="section-title">{{ t('inbound.title') }}</p>
      <table class="table">
        <thead>
          <tr>
            <th>#</th>
            <th>{{ t('common.status') }}</th>
            <th>{{ t('inbound.staging') }}</th>
            <th>{{ t('inbound.qaStatus') }}</th>
            <th>{{ t('inbound.tagsPaired') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="load in inboundLoads" :key="load.id">
            <td>{{ load.id }}</td>
            <td><span class="badge info">RFID</span></td>
            <td>{{ load.staging }}</td>
            <td>{{ load.qaStatus }}</td>
            <td>{{ load.tagsPaired }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <RFIDScannerPad :label="t('inbound.title')" />
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { inboundLoads } from '../data/mockData';
import RFIDScannerPad from '../components/RFIDScannerPad.vue';

const { t } = useI18n();
</script>
