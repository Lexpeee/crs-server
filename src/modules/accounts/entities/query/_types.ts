export type Account = {
  _id: string;
  email: string;
  username: string;
  password?: string;
  accountType: 'admin' | 'driver' | 'customer';
  createdAt: Date;
  updatedAt: Date;
};
