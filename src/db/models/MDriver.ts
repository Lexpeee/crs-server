import { Schema, model } from 'mongoose';
import { DriverProfile, Driver } from 'src/types';

const DriverSchema = new Schema<Driver>({
  _id: Schema.Types.UUID,
  //   profile
  licenseNumber: String,
  licenseType: String,
  licenseCode: String,
  numberOfVehiclesUsed: Number,
  totalDriveCount: Number,
  isInHouseDriver: Boolean,
  totalDistanceTravelled: Number,
  notes: Schema.Types.Array,
  flags: Schema.Types.Array,
});

const DriverProfileSchema = new Schema<DriverProfile>({
  driverId: {
    type: String,
    required: true,
  },
  name: {
    firstName: String,
    lastName: String,
    maidenName: String,
    middleInitial: String,
  },
  birthday: Date,
  gender: String,
  contactNumber: String,
  emailAddress: String,
  createdAt: String,
});

export const MDriver = model<Driver>('driver', DriverSchema);
export const MDriverProfile = model<DriverProfile>(
  'driver-profile',
  DriverProfileSchema,
);
