export type VehicleItemsLog = {
  _id: string;
  vehicleId: string;
  rentLogId?: string; // null if company related
  name: string;
  serialNumber: string;
  type: string; // electronics, detail, accessory
  description: string;
  image: string[];
  inclusions: string;
  notes: string[];
};
