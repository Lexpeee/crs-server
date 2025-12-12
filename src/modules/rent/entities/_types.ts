export type Rent = {
  _id: string;
  driverId: string;
  vehicleId: string;
  scheduledDateTime: Date;
  expectedReturnDateTime: Date;
  hoursExceeded: number;
  daysOfRent: number;
  price: number;
  transactions: TransactionLog[];
  dateReserved?: Date;
  preRentImages: string[];
  postRentImages: string[];
  damageLogs?: DamageLog[];
  isCancelled?: boolean;
  reasonForCancel: string[];
  dateTimeCancelled: Date;
  isContractSigned: boolean;
  isComprehendContract: boolean;
  createdAt: Date;
  updatedAt?: Date;
};

export type TransactionLog = {
  _id: string;
  driverId: string;
  amountPaid: number;
  createdAt?: Date;
  updatedAt?: Date;
};

export type FuelLog = {
  _id: string;
  driverId: string;
  rentLogId: string;
  lastValue: number;
  newValue: number;
  status: 'increased' | 'decreased';
  amountPaid: number;
  createdAt: Date;
};

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

export type ItemsLog = {
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
