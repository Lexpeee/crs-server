export type FuelLog = {
  _id: string;
  driverId: string;
  rentLogId: string;
  vehicleId: string;
  lastOdometerReading: number;
  newOdometerReading: number;
  status: 'increased' | 'decreased';
  amountPaid: number;
  createdAt: Date;
  updatedAt: Date;
};
