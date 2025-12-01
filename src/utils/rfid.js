import { ref } from 'vue';

const randomEpc = () => `EPC-${Math.floor(Math.random() * 99999)}`;
const assets = ['King Sheet', 'Queen Duvet', 'Bath Towel', 'Hand Towel', 'Spa Robe', 'Runner'];

export function useRFID(capacity = 10) {
  const queue = ref([]);
  const scanning = ref(false);
  const metrics = ref({ velocity: 0, accuracy: 99.4, uptime: 99.99 });
  let timer;

  const pushScan = () => {
    const item = {
      id: randomEpc(),
      asset: `${assets[Math.floor(Math.random() * assets.length)]}-${Math.floor(Math.random() * 100)}`
    };
    queue.value = [item, ...queue.value].slice(0, capacity);
    metrics.value.velocity = Math.min(30, Math.max(8, queue.value.length * 3));
  };

  const startSingleScan = () => {
    scanning.value = true;
    pushScan();
    scanning.value = false;
  };

  const toggleContinuous = () => {
    if (scanning.value) {
      clearInterval(timer);
      scanning.value = false;
      return;
    }
    scanning.value = true;
    timer = setInterval(() => {
      pushScan();
    }, 500);
  };

  return {
    queue,
    scanning,
    metrics,
    startSingleScan,
    toggleContinuous
  };
}
