export const SafetySchema = {
  safety: { type: String, required: true, unique: true },
  description: String,
  conversion: [String],
};

export default SafetySchema;
