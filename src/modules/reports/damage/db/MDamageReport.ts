import { Schema, model } from 'mongoose';

const DamageReportSchema = new Schema(
  {
    vehicleId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    driverId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    rentLogId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    image: {
      type: [String],
      required: true,
    },
    vehiclePart: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    sense: {
      type: String,
      required: true,
    },
    amountPaid: {
      type: Number,
      required: true,
    },
    source: {
      type: String,
      required: true,
    },
    repairIds: {
      type: [Schema.Types.ObjectId],
      default: [],
    },
  },
  {
    timestamps: true,
    id: true,
  },
);

const MDamageReport = model('damage-reports', DamageReportSchema);
export default MDamageReport;
