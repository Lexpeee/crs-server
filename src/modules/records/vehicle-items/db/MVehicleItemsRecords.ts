import { Schema, model } from 'mongoose';

const VehicleItemsRecordsSchema = new Schema(
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
