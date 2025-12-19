import { Schema, model } from 'mongoose';

const AccountSettingsSchema = new Schema({
  accountId: String,
  settings: Schema.Types.Mixed,
  isPublic: Boolean,
});

const MAccountSettings = model('account-settings', AccountSettingsSchema);
export default MAccountSettings;
