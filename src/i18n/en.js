export default {
  app: {
    title: 'RFID-enabled Mobile ERP',
    subtitle: 'Fast, bilingual, and purpose-built for asset-intensive teams'
  },
  common: {
    search: 'Search',
    filter: 'Filter',
    scan: 'Scan RFID',
    continuousScan: 'Continuous scan',
    stop: 'Stop',
    status: 'Status',
    tagId: 'Tag ID',
    asset: 'Asset',
    location: 'Location',
    action: 'Action',
    add: 'Add',
    save: 'Save',
    cancel: 'Cancel',
    history: 'History',
    details: 'Details',
    language: 'Language',
    queue: 'Queue',
    rfidFocus: 'RFID-first workflow'
  },
  modules: {
    inbound: {
      title: 'Inbound',
      desc: 'Pre-allocations, dock assignments, and QA with RFID validation'
    },
    tag: {
      title: 'Tag Binding',
      desc: 'Bind physical assets to EPCs with batch scans and verification'
    },
    transfer: {
      title: 'Transfer',
      desc: 'RFID-confirmed moves across warehouses, lines, and vehicles'
    },
    receiving: {
      title: 'Receiving',
      desc: 'RFID-assisted receiving and exceptions handling'
    },
    usage: {
      title: 'Usage tracking',
      desc: 'Operational telemetry and usage checkpoints via RFID portals'
    },
    maintenancePlan: {
      title: 'Maintenance plan',
      desc: 'Preventive schedules driven by real-time tag reads'
    },
    maintenanceRecords: {
      title: 'Maintenance records',
      desc: 'Close-the-loop logs tied to RFID identity'
    },
    scrap: {
      title: 'Scrap',
      desc: 'Chain-of-custody and compliance for end-of-life items'
    }
  },
  dashboard: {
    heading: 'RFID Operational Control Center',
    velocity: 'Scan velocity',
    accuracy: 'Read accuracy',
    uptime: 'Reader uptime',
    timeline: 'RFID events timeline'
  },
  inbound: {
    title: 'Inbound management',
    preload: 'Pre-advices',
    staging: 'Staging location',
    qaStatus: 'QA status',
    tagsPaired: 'Tags paired'
  },
  tagBinding: {
    title: 'Batch tag binding',
    guidance: 'Scan assets and tags in fast succession to auto-pair.',
    bound: 'Bound',
    pending: 'Pending verification',
    errors: 'Conflicts'
  },
  transfer: {
    title: 'Transfer orchestration',
    from: 'From',
    to: 'To',
    carrier: 'Carrier',
    stage: 'Stage',
    verified: 'Verified with RFID'
  },
  receiving: {
    title: 'Receiving & exceptions',
    proof: 'Proof of delivery',
    discrepancy: 'Discrepancy cases'
  },
  usage: {
    title: 'Usage tracking',
    checkpoints: 'Checkpoint reads',
    runtime: 'Runtime hours'
  },
  maintenancePlan: {
    title: 'Maintenance plan',
    window: 'Window',
    frequency: 'Frequency',
    next: 'Next due'
  },
  maintenanceRecords: {
    title: 'Maintenance records',
    technician: 'Technician',
    result: 'Result',
    notes: 'Notes'
  },
  scrap: {
    title: 'Scrap & decommission',
    method: 'Method',
    compliance: 'Compliance code'
  }
};
