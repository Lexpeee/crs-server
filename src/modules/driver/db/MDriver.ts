import { model, Schema } from 'mongoose';
import { Driver, DriverProfile } from '../entities/_types';

const DriverProfileSchema = new Schema<DriverProfile>({
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
});

const DriverSchema = new Schema<Driver>(
  {
    profile: {
      type: DriverProfileSchema,
      required: true,
    },
    licenseNumber: String,
    licenseType: String,
    licenseCode: String,
    numberOfVehiclesUsed: Number,
    totalDriveCount: Number,
    isInHouseDriver: Boolean,
    totalDistanceTravelled: Number,
    notes: Schema.Types.Array,
    flags: Schema.Types.Array,
  },
  {
    id: true,
    timestamps: true,
  },
);

export const MDriver = model<Driver>('driver', DriverSchema);
