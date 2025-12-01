<template>
  <div class="grid two">
    <div class="card">
      <p class="section-title">{{ t('maintenanceRecords.title') }}</p>
      <table class="table">
        <thead>
          <tr>
            <th>{{ t('common.asset') }}</th>
            <th>{{ t('maintenanceRecords.technician') }}</th>
            <th>{{ t('maintenanceRecords.result') }}</th>
            <th>{{ t('maintenanceRecords.notes') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in maintenanceHistory" :key="item.asset">
            <td>{{ item.asset }}</td>
            <td>{{ item.technician }}</td>
            <td>{{ item.result }}</td>
            <td>{{ item.notes }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <RFIDScannerPad :label="t('maintenanceRecords.title')" />
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { maintenanceHistory } from '../data/mockData';
import RFIDScannerPad from '../components/RFIDScannerPad.vue';

const { t } = useI18n();
</script>
