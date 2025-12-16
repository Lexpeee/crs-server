export type RentAuditLog = {
  _id: string;
  rentId: string;
  type: string; // 'change' | 'remove' | 'add';
  message: string;
  tags?: Record<string, string>[];
  createdAt: Date;
  updatedAt?: Date;
};
