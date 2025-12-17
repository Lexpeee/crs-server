export type DamageLog = {
  _id: string;
  vehicleId: string;
  driverId: string;
  rentLogId: string;
  images: string[];
  vehiclePart: string;
  status: 'damaged' | 'totaled';
  sense: 'visual' | 'odor' | 'feeling';
  amountPaid: number;
  source: 'external' | 'internal';
  repairIds?: string[];
  createdAt: Date;
  updatedAt?: Date;
};
