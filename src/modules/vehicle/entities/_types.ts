export type Vehicle = {
  _id: string;
  manufacturer: string;
  model: string;
  year: number;
  color: string;
  transmission: 'AT' | 'MT';
  type: 'hatchback' | 'sedan' | 'suv' | 'van' | 'pickup' | 'utility';
  licenseNumber: string;
  userId: string | null; // id of user. null if owned by company
  totalDistanceTravelled: number;
  fuelType: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  repairLogs?: string[]; // TODO: replace with type id
  createdAt: Date;
  updatedAt?: Date;
};
