export default {
  app: {
    title: 'Hotel Linen RFID Control',
    subtitle: 'Fast, bilingual, and tuned for housekeeping and laundry'
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
      title: 'Inbound laundry',
      desc: 'Dock intake, stain QA, and EPC validation for returned linen carts'
    },
    tag: {
      title: 'Tag Binding',
      desc: 'Bind sheets, towels, robes, and runners to EPCs at batch speed'
    },
    transfer: {
      title: 'Transfer',
      desc: 'RFID-confirmed moves between laundry, housekeeping closets, and carts'
    },
    receiving: {
      title: 'Receiving',
      desc: 'Room or venue receiving with RFID-backed proof and discrepancy capture'
    },
    usage: {
      title: 'Usage tracking',
      desc: 'Reads by room/turnover to monitor cycles per item type'
    },
    maintenancePlan: {
      title: 'Stain & repair plan',
      desc: 'Preventive rotations and deep-clean schedules driven by tag reads'
    },
    maintenanceRecords: {
      title: 'Repair records',
      desc: 'Close-the-loop logs for stained or damaged linen with RFID identity'
    },
    scrap: {
      title: 'Scrap',
      desc: 'Chain-of-custody for worn-out items headed to recycling or pulping'
    }
  },
  dashboard: {
    heading: 'Linen RFID Control Center',
    velocity: 'Scan velocity',
    accuracy: 'Read accuracy',
    uptime: 'Reader uptime',
    timeline: 'RFID events timeline'
  },
  inbound: {
    title: 'Inbound laundry',
    preload: 'Pre-advices',
    staging: 'Staging location',
    qaStatus: 'QA status',
    tagsPaired: 'Tags paired'
  },
  tagBinding: {
    title: 'Batch tag binding',
    guidance: 'Scan linens and tags in fast succession to auto-pair.',
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
