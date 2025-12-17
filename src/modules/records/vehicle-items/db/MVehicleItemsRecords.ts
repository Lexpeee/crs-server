import { Schema, model } from 'mongoose';
import { VehicleItemsLog } from '../entities/_types';

const VehicleItemsRecordsSchema = new Schema<VehicleItemsLog>(
  {
    vehicleId: {
      type: String,
      required: true,
    },
    rentLogId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    serialNumber: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    image: {
      type: [String],
      required: true,
    },
    inclusions: String,
    notes: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
    id: true,
  },
);

const MVehicleItemsRecords = model(
  'vehicle-item-records',
  VehicleItemsRecordsSchema,
);

export default MVehicleItemsRecords;
