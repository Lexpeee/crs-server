
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
