export type RepairLog = {
  _id: string;
  driverId: string;
  vehicleId: string;
  damageLogId: string;
  notes: string[];
  amountPaid?: number;
  createdAt: Date;
  updatedAt?: Date;
};
