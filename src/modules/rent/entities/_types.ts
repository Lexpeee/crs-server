import { DamageLog } from 'src/types';

export type Rent = {
  _id: string;
  driver: string;
  vehicle: string;
  scheduledDateTime: Date;
  expectedReturnDateTime: Date;
  hoursExceeded: number;
  daysOfRent: number;
  price: number;
  transactions: TransactionLog[];
  dateReserved?: Date;
  preRentImages: string[];
  postRentImages: string[];
  damageLogs?: DamageLog[];
  isCancelled?: boolean;
  reasonsForCancel: string[];
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
