import { model, Schema } from 'mongoose';

const AccountSchema = new Schema(
  {
    driverId: Schema.Types.ObjectId,
    email: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    accountType: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    id: true,
  },
);

const MAccount = model('accounts', AccountSchema);
export default MAccount;
