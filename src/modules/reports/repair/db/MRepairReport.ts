import { Schema, model } from 'mongoose';

const RepairReportSchema = new Schema(
  {
    vehicleId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    driverId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    damageLogId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    notes: {
      type: [String],
      required: true,
    },
    amountPaid: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    id: true,
  },
);

const MRepairReport = model('repair-reports', RepairReportSchema);
export default MRepairReport;