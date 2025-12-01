<template>
  <div class="grid two">
    <div class="card">
      <p class="section-title">{{ t('tagBinding.title') }}</p>
      <p class="subtitle">{{ t('tagBinding.guidance') }}</p>
      <table class="table">
        <thead>
          <tr>
            <th>{{ t('common.asset') }}</th>
            <th>{{ t('common.tagId') }}</th>
            <th>{{ t('common.status') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="pair in tagPairs" :key="pair.tag">
            <td>{{ pair.asset }}</td>
            <td>{{ pair.tag }}</td>
            <td>
              <span
                class="badge"
                :class="{
                  success: pair.status === 'bound',
                  warning: pair.status === 'pending',
                  info: pair.status === 'error'
                }"
              >
                {{ statusLabel(pair.status) }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <RFIDScannerPad :label="t('tagBinding.title')" :capacity="20" />
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { tagPairs } from '../data/mockData';
import RFIDScannerPad from '../components/RFIDScannerPad.vue';

const { t } = useI18n();

const statusLabel = (status) => {
  if (status === 'bound') return t('tagBinding.bound');
  if (status === 'pending') return t('tagBinding.pending');
  return t('tagBinding.errors');
};
</script>
