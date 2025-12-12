import { DamageLog } from './logs';

export type RentLog = {
  _id: string;
  driverId: string;
  vehicleId: string;
  scheduledDateTime: string;
  expectedReturnDateTime: string;
  hoursExceeded: number;
  daysOfRent: number;
  price: number;
  transactions: TransactionLog[];
  dateReserved?: Date;
  preRentImages: string[];
  postRentImages: string[];
  damageLogs?: DamageLog[];
  isCancelled?: boolean;
  reasonForCancel: string[];
  dateTimeCancelled: Date;
  isContractSigned: boolean;
  isComprehendContract: boolean;
};

export type TransactionLog = {
  _id: string;
  driverId: string;
  amountPaid: number;
  createdAt: Date;
};
