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
  updatedAt?: Date;
};

export type DriverProfile = {
  name: {
    firstName: string;
    lastName: string;
    maidenName?: string;
    middleInitial?: string;
    suffix?: string;
  };
  birthday: Date;
  gender: 'M' | 'F';
  createdAt: Date;
  contactNumber: string;
  emailAddress: string;
};
