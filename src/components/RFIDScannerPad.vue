<template>
  <div class="rfid-pad">
    <div class="rfid-pad__header">
      <div>
        <p class="eyebrow">{{ t('common.rfidFocus') }}</p>
        <p class="title">{{ label }}</p>
      </div>
      <div class="rfid-actions">
        <button class="btn" @click="startScan" :disabled="scanning">
          {{ t('common.scan') }}
        </button>
        <button class="btn btn--ghost" @click="toggleContinuous">
          {{ scanning ? t('common.stop') : t('common.continuousScan') }}
        </button>
      </div>
    </div>

    <div class="rfid-stats">
      <div class="stat" v-for="stat in stats" :key="stat.label">
        <p class="stat-label">{{ stat.label }}</p>
        <p class="stat-value">{{ stat.value }}</p>
      </div>
    </div>

    <div class="rfid-queue">
      <header>
        <span>{{ t('common.queue') }}</span>
        <small>{{ queue.length }} / {{ capacity }}</small>
      </header>
      <div class="pill-row">
        <span class="pill" v-for="item in queue" :key="item.id">
          {{ item.id }} · {{ item.asset }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRFID } from '../utils/rfid';

const props = defineProps({
  label: {
    type: String,
    default: 'RFID'
  },
  capacity: {
    type: Number,
    default: 10
  }
});

const { t } = useI18n();
const { scanning, queue, metrics, startSingleScan, toggleContinuous } = useRFID(props.capacity);

const stats = computed(() => [
  { label: t('dashboard.velocity'), value: `${metrics.value.velocity} t/s` },
  { label: t('dashboard.accuracy'), value: `${metrics.value.accuracy}%` },
  { label: t('dashboard.uptime'), value: `${metrics.value.uptime}%` }
]);

const startScan = () => startSingleScan();
</script>
