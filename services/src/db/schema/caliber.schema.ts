export const CaliberSchema = {
  caliber: { type: String, required: true, unique: true },
  description: String,
  conversion: [String],
};

export default CaliberSchema;
