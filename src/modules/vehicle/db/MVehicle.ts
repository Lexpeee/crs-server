import { Schema, model } from 'mongoose';
import { Vehicle } from '../entities/_types';

const vehicleSchema = new Schema<Vehicle>(
  {
    manufacturer: String,
    model: String,
    year: Number,
    color: String,
    transmission: String,
    type: String,
    licenseNumber: String,
    userId: String,
    totalDistanceTravelled: Number,
    fuelType: String,
    repairLogs: Schema.Types.Array,
  },
  {
    timestamps: true,
    id: true,
  },
);

export const MVehicle = model<Vehicle>('vehicles', vehicleSchema);
