export const ManufacturerSchema = {
  manufacturer: { type: String, required: true, unique: true },
  description: String,
  conversion: [String],
};

export default ManufacturerSchema;
