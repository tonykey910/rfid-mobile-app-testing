export const inboundLoads = [
  { id: 'Laundry-4821', staging: 'Service Dock A2', qaStatus: 'Pending stain check', tagsPaired: 48 },
  { id: 'Laundry-4822', staging: 'Valet Lift', qaStatus: 'QC in progress', tagsPaired: 30 }
];

export const tagPairs = [
  { asset: 'King Sheet Set · Floor 28', tag: 'EPC-9001', status: 'bound' },
  { asset: 'Bath Towel · Pool Deck', tag: 'EPC-9002', status: 'pending' },
  { asset: 'Plush Robe · Suite 1902', tag: 'EPC-9003', status: 'error' }
];

export const transfers = [
  { id: 'TR-101', from: 'Laundry Room', to: 'Housekeeping Closet 5F', carrier: 'Cart 07', stage: 'Loading', verified: true },
  { id: 'TR-102', from: 'Housekeeping Closet 3F', to: 'Sky Bar', carrier: 'Cart 03', stage: 'En route', verified: false }
];

export const receipts = [
  { id: 'RCV-774', proof: 'RFID + Supervisor sign-off', discrepancy: 'None' },
  { id: 'RCV-775', proof: 'RFID only', discrepancy: 'Shortage -3 bath towels' }
];

export const usage = [
  { asset: 'Guest Room 2108 · Bedding', checkpoints: 4, runtime: 12 },
  { asset: 'Suite 1902 · Robes', checkpoints: 3, runtime: 8 }
];

export const maintenancePlans = [
  { asset: 'Pool Towel Rotation', window: 'Daily 06:00', frequency: 'Daily', next: 'Today' },
  { asset: 'Suite Bedding Deep Clean', window: 'Mondays', frequency: 'Weekly', next: 'Next Mon' }
];

export const maintenanceHistory = [
  { asset: 'King Duvet · Floor 28', technician: 'Jamie', result: 'Passed', notes: 'Stain removed, re-tagged' },
  { asset: 'Spa Robe · Floor 12', technician: 'Chen', result: 'Follow-up', notes: 'Small tear, queued for mend' }
];

export const scrapItems = [
  { asset: 'Hand Towel · Conference Wing', method: 'Pulped', compliance: 'Local textile recycle' },
  { asset: 'Runner · Ballroom', method: 'Shred', compliance: 'Vendor certificate on file' }
];

export const timeline = [
  { time: '08:05', text: 'Laundry-4821 cart scanned at Service Dock A2' },
  { time: '08:17', text: 'Transfer TR-101 verified into Housekeeping Closet 5F' },
  { time: '08:25', text: 'Suite 1902 robe tagged via handheld reader' }
];
