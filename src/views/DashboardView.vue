<template>
  <div class="grid two">
    <div class="card">
      <p class="section-title">{{ t('dashboard.heading') }}</p>
      <RFIDScannerPad :label="t('dashboard.heading')" :capacity="12" />
    </div>
    <div class="card">
      <p class="section-title">{{ t('dashboard.timeline') }}</p>
      <div class="timeline">
        <div class="timeline-item" v-for="item in timeline" :key="item.time">
          <div class="timeline-bullet" />
          <div class="timeline-body">
            <strong>{{ item.time }}</strong>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { timeline } from '../data/mockData';
import RFIDScannerPad from '../components/RFIDScannerPad.vue';

const { t } = useI18n();
</script>
