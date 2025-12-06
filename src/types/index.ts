export * from './logs';
export * from './rent';

export type Driver = {
  _id: string;
  profile?: DriverProfile;
  licenseNumber: string;
  licenseType: string;
  licenseCode: string;
  numberOfVehiclesUsed: number;
  totalDriveCount: number;
  isInHouseDriver: boolean;
  totalDistanceTravelled: number; // km
  notes: string[];
  flags: string[]; // warnings and violations.  array of IDs
  createdAt: Date;
};

export type DriverProfile = {
  _id: string;
  driverId: Driver['_id'];
  name: {
    firstName: string;
    lastName: string;
    maidenName: string;
    middleInitial: string;
  };
  birthday: Date;
  gender: 'M' | 'F';
  createdAt: Date;
  contactNumber: string;
  emailAddress: string;
};

export type Vehicles = {
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  repairLogs?: any; // TODO: replace with type id
  fuelType: string;
  createdAt: Date; // date registered
};
