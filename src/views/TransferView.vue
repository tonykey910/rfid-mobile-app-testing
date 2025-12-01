<template>
  <div class="grid two">
    <div class="card">
      <p class="section-title">{{ t('transfer.title') }}</p>
      <table class="table">
        <thead>
          <tr>
            <th>#</th>
            <th>{{ t('transfer.from') }}</th>
            <th>{{ t('transfer.to') }}</th>
            <th>{{ t('transfer.carrier') }}</th>
            <th>{{ t('transfer.stage') }}</th>
            <th>{{ t('transfer.verified') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in transfers" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.from }}</td>
            <td>{{ item.to }}</td>
            <td>{{ item.carrier }}</td>
            <td>{{ item.stage }}</td>
            <td>
              <span class="badge" :class="item.verified ? 'success' : 'warning'">
                {{ item.verified ? 'RFID' : 'Manual' }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <RFIDScannerPad :label="t('transfer.title')" :capacity="14" />
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { transfers } from '../data/mockData';
import RFIDScannerPad from '../components/RFIDScannerPad.vue';

const { t } = useI18n();
</script>
