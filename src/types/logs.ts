export type DamageLog = {
  _id: string;
  vehicleId: string;
  driverId: string;
  rentLogId: string;
  image: string[];
  vehiclePart: string;
  status: 'damaged' | 'totaled';
  sense: 'visual' | 'odor' | 'feeling';
  amountPaid: number;
  source: 'external' | 'internal';
  repairId?: string;
  createdAt: Date;
};

export type RepairLog = {
  _id: string;
  driverId: string;
  vehicleId: string;
  damageLogId: DamageLog['_id'];
  notes: string[];
  amountPaid?: number;
  createdAt: Date;
};

export type RFIDLog = {
  _id: string;
  rentLogId: string;
  type: 'autosweep' | 'easytrip';
  currentBalance: number;
  remainingBalance: number;
  createdAt: Date;
};

export type VehicleItemsLog = {
  _id: string;
  vehicleId: string;
  rentLogId?: string; // null if company related
  name: string;
  serialNumber: string;
  type: string; // electronics, detail, accessory
  description: string;
  image: string[];
  inclusions: string;
  notes: string[];
};

export type PrintLog = {
  _id: string;
  documentId: string;
  fileUrl: string;
  createdAt: Date;
};
