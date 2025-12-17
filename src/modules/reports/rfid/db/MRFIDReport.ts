import { Schema, model } from 'mongoose';

const RFIDSchema = new Schema(
  {
    rentLogId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    currentBalance: {
      type: Number,
      required: true,
    },
    remainingBalance: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    id: true,
  },
);

const MRFIDReport = model('rfid-reports', RFIDSchema);
export default MRFIDReport;
