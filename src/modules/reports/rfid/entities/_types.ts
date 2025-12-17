export type RFIDLog = {
  _id: string;
  rentLogId: string;
  type: 'autosweep' | 'easytrip';
  currentBalance: number;
  remainingBalance: number;
  createdAt: Date;
  updatedAt?: Date;
};
