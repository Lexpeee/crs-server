import { model, Schema } from 'mongoose';
import { Rent } from '../entities/_types';

const rentSchema = new Schema<Rent>(
  {
    driver: String,
    vehicle: String,
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
    transactions: Schema.Types.Array,
    dateReserved: {
      type: Date,
      default: null,
    },
    preRentImages: {
      type: Schema.Types.Mixed,
      default: [],
    },
    postRentImages: {
      type: Schema.Types.Mixed,
      default: [],
    },
    damageLogs: {
      type: Schema.Types.Array,
      default: [],
    },
    isCancelled: {
      type: Boolean,
      default: false,
    },
    reasonsForCancel: {
      type: Schema.Types.Mixed,
      default: [],
    },
    dateTimeCancelled: {
      type: Date,
      default: null,
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
    id: true,
    timestamps: true,
  },
);

export const MRent = model('rent', rentSchema);
