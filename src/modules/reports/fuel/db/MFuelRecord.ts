import { Schema, model } from 'mongoose';

const FuelRecordSchema = new Schema(
  {
    driverId: {
      type: String,
      required: true,
    },
    rentLogId: {
      type: String,
      required: true,
    },
    vehicleId: {
      type: String,
      required: true,
    },
    lastOdometerReading: {
      type: Number,
      required: true,
    },
    newOdometerReading: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    amountPaid: {
      type: Number,
      required: true,
    },
    confimrationDocuments: {
      type: Schema.Types.Mixed,
      default: [],
    },
  },
  {
    timestamps: true,
    id: true,
  },
);

const MFuelRecord = model('fuel-reports', FuelRecordSchema);

export default MFuelRecord;
