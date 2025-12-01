<template>
  <div class="grid two">
    <div class="card">
      <p class="section-title">{{ t('maintenancePlan.title') }}</p>
      <table class="table">
        <thead>
          <tr>
            <th>{{ t('common.asset') }}</th>
            <th>{{ t('maintenancePlan.window') }}</th>
            <th>{{ t('maintenancePlan.frequency') }}</th>
            <th>{{ t('maintenancePlan.next') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in maintenancePlans" :key="item.asset">
            <td>{{ item.asset }}</td>
            <td>{{ item.window }}</td>
            <td>{{ item.frequency }}</td>
            <td>{{ item.next }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <RFIDScannerPad :label="t('maintenancePlan.title')" :capacity="18" />
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { maintenancePlans } from '../data/mockData';
import RFIDScannerPad from '../components/RFIDScannerPad.vue';

const { t } = useI18n();
</script>
