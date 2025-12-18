import { Schema, model } from 'mongoose';

const PrintAuditLogsSchema = new Schema(
  {
    documentId: {
      type: String,
      required: true,
    },
    fileUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    id: true,
  },
);

const MPrintAuditLog = model('audit-print', PrintAuditLogsSchema);
export default MPrintAuditLog;
