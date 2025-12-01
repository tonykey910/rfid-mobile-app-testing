import { createRouter, createWebHistory } from 'vue-router';
import DashboardView from '../views/DashboardView.vue';
import InboundView from '../views/InboundView.vue';
import TagBindingView from '../views/TagBindingView.vue';
import TransferView from '../views/TransferView.vue';
import ReceivingView from '../views/ReceivingView.vue';
import UsageTrackingView from '../views/UsageTrackingView.vue';
import MaintenancePlanView from '../views/MaintenancePlanView.vue';
import MaintenanceRecordsView from '../views/MaintenanceRecordsView.vue';
import ScrapView from '../views/ScrapView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'dashboard', component: DashboardView },
    { path: '/inbound', name: 'inbound', component: InboundView },
    { path: '/tag-binding', name: 'tag-binding', component: TagBindingView },
    { path: '/transfer', name: 'transfer', component: TransferView },
    { path: '/receiving', name: 'receiving', component: ReceivingView },
    { path: '/usage', name: 'usage', component: UsageTrackingView },
    { path: '/maintenance-plan', name: 'maintenance-plan', component: MaintenancePlanView },
    { path: '/maintenance-records', name: 'maintenance-records', component: MaintenanceRecordsView },
    { path: '/scrap', name: 'scrap', component: ScrapView }
  ]
});

export default router;
