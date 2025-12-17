import { Schema, model } from 'mongoose';
import { RentAuditLog } from '../entities/_types';

const RentAuditLogsSchema = new Schema<RentAuditLog>(
  {
    rentId: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    tags: {
      type: Schema.Types.Mixed,
      default: [],
    },
  },
  {
    timestamps: true,
    id: true,
  },
);

const MRentAuditLog = model('audit-rent', RentAuditLogsSchema);

export default MRentAuditLog;
