export const CategorySchema = {
  category: { type: String, required: true, unique: true },
  description: String,
  conversion: [String],
};

export default CategorySchema;
