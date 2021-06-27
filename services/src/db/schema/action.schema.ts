export const ActionSchema = {
  action: { type: String, required: true, unique: true },
  description: String,
  conversion: [String],
};

export default ActionSchema;
