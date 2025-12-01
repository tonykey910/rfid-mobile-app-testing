<template>
  <button class="module-card" :style="{ borderColor: accent }" @click="$emit('click')">
    <div class="module-icon" :style="{ backgroundColor: accent }">{{ icon }}</div>
    <div class="module-copy">
      <p class="module-title">{{ title }}</p>
      <p class="module-desc">{{ description }}</p>
    </div>
    <span class="module-arrow">→</span>
  </button>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  icon: String,
  accent: String
});
</script>
