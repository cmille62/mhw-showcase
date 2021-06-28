import { Schema } from "mongoose";

const MeasurementSchema = new Schema({
  metric: String,
  standard: String,
});

export const CaliberSchema = {
  caliber: { type: String, required: true, unique: true },
  description: String,
  conversion: [String],

  diameter: MeasurementSchema,
  type: String,
};

export default CaliberSchema;
