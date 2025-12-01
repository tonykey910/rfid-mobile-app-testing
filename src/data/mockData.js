export const inboundLoads = [
  { id: 'PO-4821', staging: 'Dock A2', qaStatus: 'Pending', tagsPaired: 12 },
  { id: 'PO-4822', staging: 'Yard Gate', qaStatus: 'In QA', tagsPaired: 6 }
];

export const tagPairs = [
  { asset: 'Pump-334', tag: 'EPC-9001', status: 'bound' },
  { asset: 'Valve-221', tag: 'EPC-9002', status: 'pending' },
  { asset: 'Motor-872', tag: 'EPC-9003', status: 'error' }
];

export const transfers = [
  { id: 'TR-101', from: 'WH-A', to: 'Line 3', carrier: 'Forklift 7', stage: 'Loading', verified: true },
  { id: 'TR-102', from: 'Line 1', to: 'Yard', carrier: 'Shuttle 2', stage: 'En route', verified: false }
];

export const receipts = [
  { id: 'RCV-774', proof: 'Signature + RFID', discrepancy: 'None' },
  { id: 'RCV-775', proof: 'RFID only', discrepancy: 'Shortage -1 pallet' }
];

export const usage = [
  { asset: 'Robot-09', checkpoints: 6, runtime: 123 },
  { asset: 'AGV-22', checkpoints: 4, runtime: 98 }
];

export const maintenancePlans = [
  { asset: 'Compressor-01', window: 'Q3', frequency: 'Monthly', next: '2024-07-12' },
  { asset: 'Generator-02', window: 'Weekly', frequency: 'Weekly', next: '2024-05-22' }
];

export const maintenanceHistory = [
  { asset: 'Compressor-01', technician: 'Jamie', result: 'Passed', notes: 'Replaced filter' },
  { asset: 'Generator-02', technician: 'Chen', result: 'Follow-up', notes: 'Vibration alert' }
];

export const scrapItems = [
  { asset: 'Battery-44', method: 'Certified recycle', compliance: 'EPA-202' },
  { asset: 'Frame-12', method: 'Shred', compliance: 'ISO-14001' }
];

export const timeline = [
  { time: '08:05', text: 'Inbound pallet EPC-9001 read at Dock A2' },
  { time: '08:17', text: 'Transfer TR-101 verified at Line 3 gate' },
  { time: '08:25', text: 'Maintenance check-in via handheld reader' }
];
