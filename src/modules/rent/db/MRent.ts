import { Schema, model } from 'mongoose';
import { Rent } from '../entities/_types';

const rentSchema = new Schema<Rent>(
  {
    driverId: {
      type: String,
      required: true,
    },
    vehicleId: {
      type: String,
      required: true,
    },
    scheduledDateTime: {
      type: Date,
      required: true,
    },
    expectedReturnDateTime: {
      type: Date,
      required: true,
    },
    hoursExceeded: {
      type: Number,
      default: 0,
    },
    daysOfRent: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    transactions: {
      type: [Object],
      default: [],
    },
    dateReserved: {
      type: Date,
      default: null,
    },
    preRentImages: {
      type: [Object],
      default: [],
    },
    postRentImages: {
      type: [Object],
      default: [],
    },
    damageLogs: {
      type: [Object],
      default: [],
    },
    isCancelled: {
      type: Boolean,
      default: false,
    },
    reasonForCancel: {
      type: [Object],
      default: [],
    },
    dateTimeCancelled: {
      type: Date,
      null: true,
    },
    isContractSigned: {
      type: Boolean,
      default: false,
    },
    isComprehendContract: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    id: true,
  },
);

export const MRent = model<Rent>('rents', rentSchema);
